---
slug: curator's-exit
title: Curator's Exit
date: 2026-04-22
authors:
  - Nathan
tags:
  - ctf
---

## The Curator's Exit

![](/img/CuratorsExit/1.png)

Downloading the pdf, we find that it is encrypted. I used johntheripper to crack the password

![](/img/CuratorsExit/2.png)

pdf password: `cherell`

The unlocked pdf shows a breakdown of the scenario, and on the second page a list of online aliases
![](/img/CuratorsExit/3.png)
![](/img/CuratorsExit/4.png)

Okay, now we have a real starting point. I ran sherlock to find the accounts of VitrineFox

![](/img/CuratorsExit/5.png)


Nice, Linktree! 

Going to it we find 3 accounts, 
![](/img/CuratorsExit/6.png)

First, I went to the PCPartPicker account and found this mysterious link... 

![](/img/CuratorsExit/7.png)

Following the link takes you to this document on drop box, with a flag! However, I was looking for his name. Clicking on file info shows that it was uploaded by Remy Beauvillier! The other flag in this document will come in handy later...

![](/img/CuratorsExit/8.png)

Flag: `CIT{Remy_Beauvillier}`

## The Curator's Exit - Part 2


![](/img/CuratorsExit/ce2.png)

Hmm, check the archives. Before we solve this, let's make sure we have all the accounts. 

I noticed that sherlock was behaving weirdly earlier, so I decided to try a different tool called https://whatsmyname.app/

![](/img/CuratorsExit/9.png)


This got more hits! Lets follow that internet archive link... Flag! 

![](/img/CuratorsExit/10.png)

Flag `CIT{N0thing_st4ys_h1dden_for3ver}`

## The Curator's Exit - Part 3

![](/img/CuratorsExit/11.png)


There was an X account that was on the linktree, going to it shows this tweet:
![](/img/CuratorsExit/12.png)

Performing a reverse image search reveals that this is in Anchiano Italy, the birthplace of Leonardo Da Vinci. This might be his next heist...

`Flag: CIT{Anchiano_Italy`

The flag above works now, but it was incorrect when I tried it. I eventually brute forced it by trying the region that Anchiano was in, Tuscany. 

Flag: `CIT{Tuscany_Italy}`

I believe that maybe the organizers possibly made a mistake here, because Anchiano worked for other teams who got the flag after me. 


## The Curator's Exit - Final

![](/img/CuratorsExit/13.png)

Something of a builder.. maybe like building PCs? Remember the flag we found from the dropbox link earlier, that must be it! 

![](/img/CuratorsExit/14.png)


`Flag: CIT{N0t_ev3ryth1ng_i$_s3cur3}`

## Cartographer's Secret

![](/img/CuratorsExit/15.png)

Cartographer, maps, open street map!  Lets check the openstreetmap account we found earlier...

![](/img/CuratorsExit/16.png)

Bingo!

`Flag: CIT{ch3ck_th3_OSM_t4gs}`

# Conclusion

That concludes the Curator's Exit related OSINT challenges. These were very enjoyable, I think that hiding the flag in osm tags was super creative! Definitely sharpened my skills and taught me that sometimes sherlock doesn't show everything.
