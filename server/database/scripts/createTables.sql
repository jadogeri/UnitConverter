/**
@author  Joseph Adogeri
@since   18-DEC-2024
@version 1.0  

**/

CREATE TABLE IF NOT EXISTS SERVICE
(S_name VARCHAR(20) PRIMARY KEY);


CREATE TABLE IF NOT EXISTS DAILYSPAN
(d_id INTEGER PRIMARY KEY,
 d_name VARCHAR(20) NOT NULL,
 d_total INTEGER DEFAULT 0,
FOREIGN KEY(d_name) REFERENCES SERVICE(s_name));


CREATE TABLE IF NOT EXISTS LIFESPAN
(l_id INTEGER PRIMARY KEY,
l_name VARCHAR(20) NOT NULL,
l_total INTEGER DEFAULT 0,
FOREIGN KEY(l_name) REFERENCES SERVICE(s_name));