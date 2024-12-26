/**
@author  Joseph Adogeri
@since   18-DEC-2024
@version 1.0  

**/

-- SERVICE 
INSERT OR REPLACE INTO SERVICE(s_name) VALUES ("time");
INSERT OR REPLACE INTO SERVICE(s_name) VALUES ("temperature");
INSERT OR REPLACE INTO SERVICE(s_name) VALUES ("geometry");
INSERT OR REPLACE INTO SERVICE(s_name) VALUES ("cooking");

-- DAILYSPAN
INSERT OR REPLACE INTO DAILYSPAN(d_name) VALUES ("time");
INSERT OR REPLACE INTO DAILYSPAN(d_name) VALUES ("temperature");
INSERT OR REPLACE INTO DAILYSPAN(d_name) VALUES ("geometry");
INSERT OR REPLACE INTO DAILYSPAN(d_name) VALUES ("cooking");


-- LIFESPAN
INSERT OR REPLACE INTO LIFESPAN(l_name) VALUES ("time");
INSERT OR REPLACE INTO LIFESPAN(l_name) VALUES ("temperature");
INSERT OR REPLACE INTO LIFESPAN(l_name) VALUES ("geometry");
INSERT OR REPLACE INTO LIFESPAN(l_name) VALUES ("cooking");