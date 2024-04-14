import { useEffect, useState } from "react";
import { useReadContract } from "wagmi";
import {
  DecentTweetAbi as abi,
  DecentTweetContractAddress as address,
} from "../../contract/DecentTweetABI";
import { TweetData } from "../../utils/helper";
import Tweets from "../Tweets";

const ForYouFeed = () => {
  // const account = useAccount();
  // const userAddress: string = account?.address?.toString() || "";
  const [tweetData, setTweetData] = useState<TweetData[]>();

  const { data, status } = useReadContract({
    abi,
    address: address as `0x${string}`,
    functionName: "getAllTweets",
  });

  console.log(tweetData, status);
  useEffect(() => {
    if (data) {
      setTweetData(data as TweetData[]);
    }
  }, [data]);

  // useEffect(() => {
  //   if (result?.data && Array.isArray(result.data)) {
  //     const tweetData: TweetData[] = result.data;
  //     setTweets(tweetData);
  //   }
  // }, [result]);

  return (
    <div className="p-2 flex flex-col gap-2 divide-y divide-neutral-700">
      <Tweets tweetData={tweetData || []} />
    </div>
  );
};

export default ForYouFeed;
