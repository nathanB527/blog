---
slug: secure-password-manager
title: Secure Password Manager
date: 2026-04-19
authors:
  - Nathan
tags:
  - ctf
  - reverse-engineering
---

# Secure Password Manager write up

### Challenge information
CTF@CIT
This challenge was in the reverse engineering category, and provided the binary "reallysecurepasswordmanager".  The challenge was made by **ronnie**.

To participate in next years CTF, please visit https://ctf.cyber-cit.club/


### First steps
The first thing I did was run the binary. 


![](/img/passman/step1.png) 

Okay, that's interesting. The only output I get is from option 3, saying "ERROR_NOT_AUTHENTICATED". After seeing the behavior of the binary, I decided to take a look on the inside.

Using binary ninja, I decompiled the file. Once I had it I checked the main() function 

![](/img/passman/step2.png)

From this I found the `"ERROR_NOT_AUTHENTICATED"` string from before. I noticed that the other functions were simply locked behind being authorized, with the third one functional without any authorization. Explains the behavior seen when I ran the file earlier! 

### Gaining authorization

After checking out the main() function, my goal was pretty clear: figure out a way to get authenticated. I scrolled through the functions list looking for anything that could be a clue and stumbled upon the auth() function

![](/img/passman/step3.png)

Alright, now we're getting somewhere! I quickly noticed a very out of place string, `"notronnie"`. Remembering that the author of this flag was ronnie, i knew i had found something. 

This function checks if the user running the file is named `"notronnie"`, and returns 0 if it its true. In the main function that, would give authentication!  

### Logging into notronnie

I made the notronnie user and tried it with `su -l notronnie`, but no luck.  

![](/img/passman/step5.png)

Before I went back to the drawing board, I wanted to try logging in with ssh to see if that would make a difference. (note that i renamed the binary to ./passman for convenience)

![](/img/passman/step6.png)

This worked! I saw that it printed `"Authenticated as: notronnie"`, so I immediately tried asking for the password to account name `flag`, and it worked! 

FLAG: `CIT{mT5zpH0lzIG3}`

### Conclusion

This was a fun challenge made that deepened my skills in reverse engineering, and allowed me to practice using binary ninja!
