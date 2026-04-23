---
slug: forbidden-sock
title: The Forbidden Sock
date: 2026-04-21
authors:
  - Nathan
tags:
  - ctf
  - osint
---




![](/img/ForbiddenSock/challenge.png)

Attached image:
![](/img/ForbiddenSock/1.jpg)

### Solution
Okay, looks like we're finding the seating section of someone at a baseball game. First, I needed to find out what stadium it was. 
Quickly, I noticed the red sox team logo. 

I googled "red sox stadium" and found out it was fenway park. Then, I googled "fenway park seating chart" and found this image:

![](/img/ForbiddenSock/2.webp)

Cross referencing with the location in the original photo, I began entering flags. Starting with 8, nope. 7, success!

Flag: `CIT{RedSox_Section_7}`
