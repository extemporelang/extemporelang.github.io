---
title: Extempore documentation
permalink: /docs/
---

## Getting help

Learning a new programming language is hard, so don't despair if you get
stuck and need help. The [mailing
list](mailto:extemporelang@googlegroups.com) and [google
group](https://groups.google.com/group/extemporelang) are good places to
start, or you could see if we're on the **\#extempore** IRC channel on
freenode.

This is the main docs page

<ul>
{% for item in site.docs %}
  <li><a href="{{ item.url }}">{{ item.title }}</a></li>
{% endfor %}
</ul>
