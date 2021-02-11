---
title: DHSZ CTF
category: education
started: December 2021
finished: January 2021
image: dhsz-ctf/pexels-pixabay-60504.jpg
layout: project_single
---
## Project background

As the leader of the my school's competitive programming competitions I'm always thinking of ways to challenge the students in new ways.

The 2021 edition of the DHSZ Coding Competition saw the students work through a number of 'hacking' style challenges in addition to the standard competitive programming aspects.

Students competed in groups of 8 and had 2 hours to complete 20 independent computer science related trials. 

The challenges set tested on their knowledge of:

- Data compression
- File formats
- Metadata
- Python programming
- Steganography
- Website development

...and much, much more!

## Technology used

The competition itself used a  platform called CTFd, an open-source platform for hosting *Capture the Flag* computer security style competitions. 

The source for CTFd is [available on GitHub](https://github.com/CTFd/CTFd).

For our competition I created a virtual private server (VPS) provided by Linode to host the player data, submissions, scores and solutions. On the VPS I created a Docker container for the Python web server and database needed for CTFd.

On completion of the competition this virtual server was destroyed in the interest of data privacy.

## Competition results

After a spirited 2 hours of intense hacking competition the final results were as follows:

1. Raleigh House
2. Grenville House
3. Spenser House
4. Fan House