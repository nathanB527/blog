---
slug: 2-years
title: Has it really been 2 years?
date: 2026-04-21
authors:
  - Nathan
tags:
  - ctf
  - osint
---


To participate in next years CTF, please visit https://ctf.cyber-cit.club/


![](/img/wowcafe/1.png)

The attached image:

![](/img/wowcafe/2.png)
This was my personal favorite out of all the OSINT challenges. Just look at that picture, literally just pickles on a bun! My team and I were dying laughing at this one for a minute before we gathered our bearings and began solving. 

### Wow Cafe

So, we have to find the name of the menu item. The first step was finding out what resturaunt it came from. On the wrapper, you can barely make out that it says "WOW cafe". I googled it, and found that it was part of the University of New Haven Dining, so I was 99% sure it was the right place. I located their menu and began looking over it, but nothing really resembled the picture. 
![](/img/wowcafe/3.png)
![](/img/wowcafe/4.png)

Just to be sure, I tried every single item on the menu as the flag with no luck. At this point, we were stumped. Now, the image did say "has it really been 2 years", so we directed our attention to the wayback machine to look at the earlier menu. Unfortunately, it didn't seem like it had changed in the past couple of years. 

### WOW corporate? Sure, we'll try that

Desperate for answers, my teammate 1337ducky had the absolutely phenomenal, bright, intelligent, and totally in-scope idea to call WOW cafe corporate. After being on hold for a couple minutes, a kind woman picked up. As ducky described the old menu item that "looked like a hot dog bun or a hoagie with exclusively pickles on it", we could hear the woman on the other end trying not to crack up. Shortly after, he got referred to another person, but unfortunately they never picked up. After leaving a message, they never got back to us. Weird



### The social media breakthrough! 

After going back to the original image, I began thinking about the item. It was on a hotdog bun, which is not normal for a wow cafe at all. Maybe it was exclusive to the University of New Hampshire location? But, I had already checked the menu and didn't see anything like it. 

At my own school, there is a big cafe with a bunch of restaurants. Associated with that is a social media account that posts about new restaurants and other relevant news. Perhaps UNH has something similar? 

I googled UNH dining, and found an instagram account. Unfortunately, it was for a *different* UNH. However, while I was on instagram I decided to search for wow cafe and see if anything would come up. 

![](/img/wowcafe/5.png)

Oh my god. The holy grail. We had found it. The Chick-N-Dawg. 

Flag: `CIT{chick-n-dawg}`

After finding the flag, we had joked about going to WOW cafe for the Chick-n-dawg, but unfortunately the one in San Antonio had closed down. I made this video to commemorate our sadness. 


<video controls width="100%">
  <source src={require('/img/wowcafe/chickendawg.mp4').default} type="video/mp4" />
  Your browser doesn't support video.
</video>
