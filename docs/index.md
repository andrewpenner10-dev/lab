---
layout: default
title: Home
---
<section class="hero"><div class="shell">
  <div class="eyebrow"><span class="status-dot"></span> BUILDING & LEARNING IN PUBLIC</div>
  <h1>Small experiments.<br><em>Long-distance ambitions.</em></h1>
  <p class="hero-copy">I'm learning how to build optical communications, networking and computing systems—starting with Arduino boards and laser links, one experiment at a time.</p>
  <div class="actions"><a class="primary" href="#experiments">Explore the journal <span>↘</span></a><a class="secondary" href="{{ '/about/' | relative_url }}">About the project ↗</a></div>
  <div class="metrics">
    <div><strong>007</strong><span>Experiments recorded</span></div>
    <div><strong>200 kb/s</strong><span>Highest repeated optical signalling test</span></div>
    <div><strong>128 / 128</strong><span>Packets verified at 200 kb/s</span></div>
  </div>
  <p class="metrics-note">Results from short physical tests—not a sustained throughput or reliability claim.</p>
</div></section>
<section id="experiments" class="journal"><div class="shell"><div class="section-heading"><div><div class="eyebrow">THE BUILD JOURNAL</div><h2>Experiments, in reverse order.</h2></div><p>Notes, setbacks and working prototypes—from the first light pulses onward.</p></div>
<div class="entries">
{% assign sorted = site.pages | where: 'is_experiment', true | sort: 'number' | reverse %}
{% for item in sorted %}
<a class="entry" href="{{ item.url | relative_url }}"><span class="entry-num">{{ item.number }}</span><div class="entry-text"><span class="entry-date">{{ item.date_display }}</span><h3>{{ item.title }}</h3><p>{{ item.description }}</p></div><span class="entry-arrow">↗</span></a>
{% endfor %}
</div></div></section>
<section class="closing"><div class="shell"><span class="eyebrow">WHAT I'M EXPLORING</span><div class="topics"><div><span>01 / OPTICS</span><h3>Communication through light</h3><p>Laser links, receivers, timing, reliability and eventually optical pointing and tracking.</p></div><div><span>02 / NETWORKING</span><h3>Connecting systems</h3><p>Turning individual links into useful networks and services.</p></div><div><span>03 / COMPUTING</span><h3>Workloads over the link</h3><p>Moving requests and results between independent computing devices.</p></div></div></div></section>
