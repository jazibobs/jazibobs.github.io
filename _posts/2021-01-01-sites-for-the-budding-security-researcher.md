---
layout: post
title:  "PenTesting and security research resources for beginners"
author: Jared
date:   2021-01-01 16:16:00 +0800
---

"The best computer scientists are lifelong learners", this is a phrase my boss has repeated to me many times this academic year and it is something I agree with. So when I found myself with 3 weeks of vacation for our winter break I went searching for an area of computer science where I know I could improve that I needed to learn more about.

One of these areas is penetration testing/ethical hacking. 

## Pretext

During 2020 I was concluding my MSc, for my final project I built a web-based prototype for a live classroom quiz platform called [QuizWig](https://www.quizwig.com) - open beta coming in 2021. 

This was the first ever large scale project I had written with the MEVN stack (MongoDB, Express.js, Vue.js, Node.js) so a lot of the development process came with a learning curve. As the project progressed, I became more and more aware of the gaps in my knowledge relating to application security - especially for this new (to me) technology stack. This lead me to think, what pitfalls do I need to make myself aware of? What are the common attacks that can befall a system? How do hackers _learn_ to hack?! 

The last 3 weeks have given me a chance to begin to answer these questions.

## What are the dangers?

First things first, it's important to know what sort of attacks I was up against. [OWASP - The Open Web Application Security Project](https://owasp.org/) is a non-profit foundation working to improve the security of web applications. Their role is to educate developers on how to keep applications secure make the web a safer place for everyone.

One of their flagship resources is their [top 10 web application security risks](https://owasp.org/www-project-top-ten/) which are as follows:
1. Injection
2. Broken Authentication
3. Sensitive Data Exposure
4. XML External Entities (XXE)
5. Broken Access Control
6. Security Misconfiguration
7. Cross-Site Scripting (XSS)
8. Insecure Deserialization
9. Using Components with Known Vulnerabilities
10. Insufficient Logging & Monitoring

As you can see, there are multiple avenues that attacks can employ against a system to try to gain unlawful access to your systems and data. So what is the best way to test an application for these sorts of vulnerabilities?

## Attack is the best form of defense!

To keep out attackers you need to think and act like an attacker. To protect your applications from break-ins you need to try to break in...Learn the tricks, techniques, and tools that hackers regularly employ so you can employ them against your own systems and patch any issues as you find them. To be able to do this, you need to brush up on your knowledge of programming, Linux and cryptography. To get you started, here are some of the sites I've been using to guide me over the last few weeks.

## Websites for learning hacking:
- [Capture The Flag 101](https://ctf101.org/) - Capture the Flag (or CTF) is a style of hacking competition where players are challenged to find pieces of data - or _flags_ - within a target system which has a known vulnerability. CTF101 is a site by the engineering department of NYU to introduce you to the basics of breaking into computer systems.

- [Cryptohack](https://cryptohack.org) - this platform was built by competitive CTF (capture the flag) players to guide you in learning more about cryptography. Expect to learn about data representation, asymmetric encryption and a bit of mathematics.

- [OverTheWire](https://overthewire.org/wargames/) - this site provides a number of _Wargames_ for players to try. Wargames allow players to learn about security concepts in for form of games. OverTheWire provide a number of Wargames with a range of difficulties.

- [PentesterLab (subscription needed)](https://pentesterlab.com/) - this paid site provides an introduction to penetration testing, you will learn about common bugs present in web applications and web servers and how hackers can use these to gain control of a system.

- [PicoCTF](https://picoctf.org/resources) - created by Carnegie Mellon's security research department, PicoCTF is an annual CTF competition for targeted at high school students. Tasks from previous years are hosted in their [PicoGym](https://play.picoctf.org/) and available to practice learning about security concepts.

- [pwn.college](https://pwn.college/) - from Arizona State University comes another platform for learning about cybersecurity. pwn.college provides lectures (on YouTube), office hours (on Twitch), a live chat server (on Discord) and a number of hosted CTF challenges for students to attempt. This course is aimed at students who have previously studied computer science but have not focused on cybersecurity before. As such, students will be expected to already have knowledge of Linux, computer architecture and low level programming with assembly.

- [TryHackMe (subscription needed)](https://tryhackme.com/) - based in the U.K., TryHackMe is another platform that provides resources for learning cybersecurity in the form of small challenges known as _rooms_. While some of their content is locked behind a paywall, a great set of introductory challenges were released for Xmas 2020 in the form of their [Advent of Cyber](https://tryhackme.com/room/adventofcyber2) challenge.

## Final thoughts
There is a growing need for penetration testers and infosec experts. As the world is ever more inter-connected, it's more and more important that computer scientists are aware of the steps required to keep their systems secure. It is reported that there is a global shortage of computer security experts which is part of the reason why platforms like PicoCTF were originally created. 

The sooner you start exploring computer system security, the better prepared you will be to build robust, secure systems in the future.
