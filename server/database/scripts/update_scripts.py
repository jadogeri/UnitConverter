def update_scripts():
    return { "lifespan" :  "UPDATE LIFESPAN SET l_total = (l_total + 1 ) WHERE l_name = ?",
             "dailyspan" :  "UPDATE DAILYSPAN SET d_total = (d_total + 1) WHERE d_name = ?",
           }

def update_lifespan_scripts():
    return { "time" :  "UPDATE LIFESPAN SET l_total = (l_total + 1 ) WHERE l_name = 'time'",
             "temperature" :  "UPDATE LIFESPAN SET l_total = (l_total + 1) WHERE l_name = 'temperature'",
             "geometry" :  "UPDATE LIFESPAN SET l_total = (l_total + 1) WHERE l_name = 'geometry'",
             "cooking" :  "UPDATE LIFESPAN SET l_total = (l_total + 1) WHERE l_name = 'cooking'",
           }

def update_dailyspan_scripts():
    return { "time" :  "UPDATE DAILYSPAN SET d_total = (d_total + 1 ) WHERE d_name = 'time'",
             "temperature" :  "UPDATE DAILYSPAN SET d_total = (d_total + 1) WHERE d_name = 'temperature'",
             "geometry" :  "UPDATE DAILYSPAN SET d_total = (d_total + 1) WHERE d_name = 'geometry'",
             "cooking" :  "UPDATE DAILYSPAN SET d_total = (d_total + 1) WHERE d_name = 'cooking'",

           }