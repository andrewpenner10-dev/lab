#!/usr/bin/env python3
"""Run from the root of the existing lab GitHub repository after copying docs/ here.
Copies the seven original experiment Markdown files into Jekyll-rendered docs/experiments/.
The original Markdown files are never modified.
"""
from pathlib import Path
from datetime import date
import re

ROOT = Path(__file__).resolve().parent
DOCS = ROOT / 'docs' / 'experiments'
DOCS.mkdir(parents=True, exist_ok=True)
DESCRIPTIONS = {
'001': ('Optical Communication','The starting point: testing whether two computers can communicate using light.'),
'002': ('Sending Digital Data Through Light','Encoded digital information travelling between independent microcontrollers using light.'),
'003': ('Laser + Photodiode Link','Replacing an LED and light sensor with a directional laser and photodiode receiver.'),
'004': ('Laser Digital Communication + Speed Testing','Sending digital data through the laser and measuring errors as the signal gets faster.'),
'005': ('Pushing the Optical Link to 2,000 bps','Increasing laser communication speed while testing receiver performance, timing and error rates.'),
'006': ('From Laser Communication to Optical Computing','A 20,000 bit/s optical link delivers a real computing request to a locally hosted service.'),
'007': ('Bidirectional Lasers, Hardware UART, and 200,000 bit/s','Bidirectional experiments, hardware UART reception and repeated 200 kb/s short-burst optical tests.'),
}
for src in sorted(ROOT.glob('*-experiment-*.md')):
    number = re.search(r'experiment-(\d{3})', src.name)
    if not number: continue
    no = number.group(1)
    title, desc = DESCRIPTIONS.get(no, (f'Experiment {no}', 'Notes from an optical communication experiment.'))
    iso_date = src.name[:10]
    header = '\n'.join(['---','layout: experiment','is_experiment: true',f'number: "{no}"',f'title: "{title}"',f'description: "{desc}"',f'date_display: "{date.fromisoformat(iso_date).strftime("%B %d, %Y")}"',f'permalink: /experiments/{no}/','---',''])
    body = src.read_text(encoding='utf-8')
    # Original journal starts with a title; the article layout already provides one.
    body = re.sub(r'\A\s*# [^\n]+\n', '', body, count=1)
    # Preserve the journal's body and existing absolute image links.
    (DOCS / src.name).write_text(header + '\n' + body, encoding='utf-8')
    print('Created', DOCS / src.name)
print('Done. Commit docs/ and enable GitHub Pages from main /docs.')
