---
layout: default
title: Home
---
<section class="hero"><div class="shell">
  <div class="eyebrow">LAB JOURNAL</div>
  <h1>Optical communication experiments</h1>
  <p class="hero-copy">A journal of my experiments building laser communications, networking, and computing systems.</p>
  <div class="actions"><a class="primary" href="#experiments">View experiments <span>↘</span></a><a class="secondary" href="{{ '/about/' | relative_url }}">About the project ↗</a></div>
  <div class="metrics">
    <div><strong>007</strong><span>Experiments recorded</span></div>
    <div><strong>200 kb/s</strong><span>Highest repeated optical signalling test</span></div>
    <div><strong>128 / 128</strong><span>Packets verified at 200 kb/s</span></div>
  </div>
  <p class="metrics-note">Results from short physical tests—not a sustained throughput or reliability claim.</p>
</div></section>
<section id="experiments" class="journal"><div class="shell"><div class="section-heading"><div><div class="eyebrow">JOURNAL</div><h2>Experiments</h2></div><p>Most recent first.</p></div>
<div class="entries">
{% assign sorted = site.pages | where: 'is_experiment', true | sort: 'number' | reverse %}
{% for item in sorted %}
<a class="entry" href="{{ item.url | relative_url }}"><span class="entry-num">{{ item.number }}</span><div class="entry-text"><span class="entry-date">{{ item.date_display }}</span><h3>{{ item.title }}</h3><p>{{ item.description }}</p></div><span class="entry-arrow">↗</span></a>
{% endfor %}
</div></div></section>
