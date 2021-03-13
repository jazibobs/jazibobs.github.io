---
layout: post
title:  "Accessibility testing with ChromeLens"
author: Jared
date:   2016-07-11 13:51:36 +0100
---

Google's [Addy Osmani](https://twitter.com/addyosmani/status/752517889031229440) drew my attention to a very interesting Chrome extension today by the name of [ChromeLens](http://chromelens.xyz/).

Once installed, ChromeLens extends the functionality of the Google Chrome DevTools allowing developers to better test the accessibility of their websites for users with visual impairments and users who navigate websites primarily with the keyboard.

Its key features include:

## Lenses

The lenses can emulate different visual impairments such as complete vision loss, partial blindness and a number of colour blindnesses. 

These allow web developers to test that the design of their site does not accidentally impair a user's ability to navigate and interact with a page.

For example, by making use of the different colour blindness lenses the colour palette used throughout the site would be tested to ensure that the text content colour and page background colour have a high contrast which are not difficult to differentiate between.

## Accessibility checks

The accessibility checks button runs an audit of the current webpage using [Google's accessibility developer tools](https://github.com/GoogleChrome/accessibility-developer-tools) and provides recommendations on how the page can be improved for accessibility. 

When I ran it on this site it highlighted that the `html` tag was missing its language attribute and provided [a link to the Chrome accessibility DevTools wiki](https://github.com/GoogleChrome/accessibility-developer-tools/wiki/Audit-Rules#ax_html_01) explaining why it's important that I fix this issue.

{% highlight html %}

<!-- Bad original markup! -->
<html>

<!-- Good accessible markup -->
<html lang="en">

{% endhighlight %}

A very handy little feature allowing us all to create more accessible sites step by step.

## Trace tab path

The final feature is *Trace tab path*, this tool allows you to visually see the focus order of elements when a user is navigating exclusively with the tab key. 

This feature enables you to check that the order of the tabbed elements allows users to easily navigate through the site's content from beginning to end while tracing the route between the focused elements.

![The traced tab path for jaredrigby.co.uk](/assets/blog/tab-trace-jaredrigby.png)
*The traced tab path for this blog*

This forces you to consider how different users interact with your site. For example, if your website's main navigation is a very large menu with lots of nested links you may not have considered that users navigating the site with a keyboard would have to press the tab key *so many* times before they actually reach your content, incentivising your team to to implement a "skip to content" anchor tag or similar.

## Final thoughts

My initial impressions of this tool are very positive, as the ChromeLens website states itself **more than 280 million people worldwide are visually impaired** so having a tool which aids developers in creating a more open web can only be a good thing.

I'll be watching the development of ChromeLens very closely and look forward to seeing how the team build upon this solid foundation.