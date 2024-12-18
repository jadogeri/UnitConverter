UPDATE DAILYSPAN
    SET d_total = ?
    WHERE d_total > 0 AND
          d_name = ?;