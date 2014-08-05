#!/usr/bin/env python

import os
import datetime
import ephem

mdq = ephem.Observer()

today = datetime.date.today()
one_day = datetime.timedelta(days=1)
tomorrow = today + one_day

mdq.date = str(tomorrow) + " 15:00:00"

mdq.lon  = str(-57.56)
mdq.lat  = str(-38)

mdq.elev = 20

mdq.pressure= 0
mdq.horizon = '-0:34'

sunset = mdq.next_setting   (ephem.Sun())

EndDate = datetime.datetime.strptime(str(sunset), "%Y/%m/%d %H:%M:%S")

month = int(EndDate.strftime('%m'))
day = int(EndDate.strftime('%d'))
hours = int(EndDate.strftime('%H'))
minutes = int(EndDate.strftime('%M'))

# Generate time for tomorrow
cronjob = "%d %d %d %d * /home/xbian/BT/checkbt.sh" % (minutes, hours, day, month)

# print cronjob

# Add cron job
os.system("crontab -r")
os.system("echo '" + cronjob + "' | crontab")
os.system("crontab -l")