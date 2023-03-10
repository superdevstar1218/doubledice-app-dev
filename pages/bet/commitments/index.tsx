
import { ReactElement, useState, useEffect } from "react";
// Next
import Head from "next/head";
import { useRouter } from "next/router";

// Components
import FullLayout from "components/layouts/fullLayOut";
import { useQuery } from "@apollo/client";

// Utils
import { localTime } from "utils/helpers";
import { VIRTUAL_FLOOR_BETS } from "graphql/queries";
import { extractVfIdFromURL } from "utils/helpers";
import { Outcome } from "lib/graph";

interface ICommitmentData {
  amountCommitted: number;
  timeOfCommitment: number;
  committer: string;
  optionChosen: string;
  paymentTokenSymbol: string;
}

const CommitmentsPage = (): ReactElement => {
  const [commitmentData, setCommitmentData] = useState<ICommitmentData[]>([]);

  const router = useRouter();

  const id = router.asPath.includes("#!")
    ? extractVfIdFromURL(router.asPath, 4)
    : null;

  const { data } = useQuery(VIRTUAL_FLOOR_BETS, {
    variables: {
      vfId: id,
    },
  });

  useEffect(() => {
    const vf = data?.virtualFloors?.length > 0 && data.virtualFloors[0];
    if (vf && vf.outcomes && vf.paymentToken) {
      vf.outcomes.map((outcome: Outcome) => {
        if (outcome.outcomeTimeslots[0]) {
          outcome.outcomeTimeslots[0].outcomeTimeslotTransfers.map(
            (outcomeTimeslotTransfer, i) => {
              setCommitmentData((prevState: any) => [
                ...prevState,
                {
                  amountCommitted: outcomeTimeslotTransfer.amount,
                  timeOfCommitment: outcomeTimeslotTransfer.timestamp,
                  committer: outcomeTimeslotTransfer.to.id,
                  optionChosen: outcome.title,
                  paymentTokenSymbol: vf.paymentToken.symbol,
                },
              ]);
            }
          );
        }
      });
    }
  }, [data]);

  return (
    <FullLayout>
      <Head>
        <title>Commitments</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <table style={{ color: "white", width: "80%" }}>
        <thead style={{ textAlign: "left", fontSize: "2rem" }}>
          <tr style={{ padding: "0 1rem" }}>
            <th>User</th>
            <th>Amount</th>
            <th>Option</th>
            <th>Time of commitment</th>
          </tr>
        </thead>
        <tbody style={{ textAlign: "left", fontSize: "1.4rem" }}>
          {commitmentData.map((commitment, index) => (
            <tr key={index} style={{ padding: "0 1rem" }}>
              <td>{commitment.committer}</td>
              <td>{`${commitment.amountCommitted} ${commitment.paymentTokenSymbol}`}</td>
              <td>{commitment.optionChosen}</td>
              <td>
                {localTime("DD MMM YYYY H:mm", commitment.timeOfCommitment)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </FullLayout>
  );
};

export default CommitmentsPage;
