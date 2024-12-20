def update_scripts():
    return { "lifespan" :  "UPDATE LIFESPAN SET l_total = ? WHERE ? >= 0 AND l_name = ?",
                "dailyspan" :  "UPDATE DAILYSPAN SET d_total = ? WHERE ? >= 0 AND d_name = ?"
            }