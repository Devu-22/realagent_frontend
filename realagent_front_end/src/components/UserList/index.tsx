import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { Text, Loader, Flex } from "@mantine/core";
import styles from "./UserCount.module.css"; // Importing CSS module correctly

const UserCount: React.FC = () => {
  const [userCount, setUserCount] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchUserCount = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.post(
        "https://dev-api.realtorbots.ai/api/realagentai/users/number-of-users",
        {},
        {
          headers: {
            Accept: "*/*",
          },
        }
      );
      if (response.data && response.data.result) {
        setUserCount(response.data.result);
      } else {
        setError("Unexpected API response structure.");
      }
    } catch (err) {
      setError("Error fetching user count.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchUserCount();
  }, [fetchUserCount]);

  return (
    <Flex className={styles.container3}>
      {loading ? (
        <Loader color="blue" />
      ) : error ? (
        <Text className={styles.errorText}>{error}</Text>
      ) : (
        <Text className={styles.userCountText}>
          {`Number of Registered Users: `}
          <span className={styles.userCountNumber}>{userCount}</span>
        </Text>
      )}
    </Flex>
  );
};

export default UserCount;
