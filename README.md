# Lab

Building optical communications, networking, and computing infrastructure from the ground up, with the long-term goal of operating these systems in space.

Starting with laser-based data transmission, I’m developing the hardware and software needed to connect devices, route information, and perform distributed computing. Over time, the goal is to integrate these capabilities into increasingly advanced systems, eventually extending into spacecraft and orbital infrastructure.

This repository documents the experiments, prototypes, and progress along the way.


---

## Build Journal

### [006 — From Laser Communication to Optical Computing](2026-10-14-experiment-006.md)

Increased optical signalling speed to 20,000 bit/s, verified 348,160 payload bits with zero detected errors, and successfully transmitted the first real computing request through a laser. The receiving service executed the calculation and displayed the result on a self-hosted web dashboard.

### [005 — Pushing the Optical Link to 2,000 bps](2026-10-04-experiment-005.md)

Increasing the laser communication speed from ~200 bps toward 10,000 bps by
testing faster signaling, receiver performance, timing, and error rates.

### [004 — Laser Digital Communication + Speed Testing](2026-10-03-experiment-004.md)

Transmitting digital data through the laser, measuring errors, and experimentally
finding the speed limit of the current optical link.

### [003 — Laser + Photodiode Link](2026-09-29-experiment-003.md)

Replacing the LED/LDR link with a directional laser and photodiode receiver.

### [002 — Sending Digital Data Through Light](2026-09-19-experiment-002.md)

Transmitting encoded digital information between two independent
microcontrollers using light.

### [001 — Optical Communication](2026-08-20-experiment-001.md)

The starting point: building a system that allows two computers to
communicate using light.
