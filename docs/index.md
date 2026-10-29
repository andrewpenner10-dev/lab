---
layout: default
title: Home
---
<section class="hero"><div class="shell">
  <div class="eyebrow">LAB JOURNAL</div>
  <h1>Building the Internet with Lasers</h1>
  <p class="hero-copy">Documenting the development of free-space optical communications, internet infrastructure, and distributed computing—from Arduino prototypes toward orbital systems.</p>
  <div class="actions"><a class="primary" href="#experiments">View experiments <span>↘</span></a><a class="secondary" href="{{ '/about/' | relative_url }}">About the project ↗</a></div>
</div></section>
{% include data-rates.html %}
<section id="experiments" class="journal"><div class="shell"><div class="section-heading"><div><div class="eyebrow">JOURNAL</div><h2>Experiments</h2></div><p>Most recent first.</p></div>
<div class="entries">
{% assign sorted = site.pages | where: 'is_experiment', true | sort: 'number' | reverse %}
{% for item in sorted %}
<a class="entry" href="{{ item.url | relative_url }}"><span class="entry-num">{{ item.number }}</span><div class="entry-text"><span class="entry-date">{{ item.date_display }}</span><h3>{{ item.title }}</h3><p>{{ item.description }}</p></div><span class="entry-arrow">↗</span></a>
{% endfor %}
</div></div></section>
