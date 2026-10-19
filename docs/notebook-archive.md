# Lab notebook archive

Entries retired from the Lab Notebook section of the site. They are kept here
so nothing is lost, and nothing in this file is rendered. To bring one back,
copy it into `NOTEBOOK` in `src/lib/data.ts`.

Archived in October 2026 (Vol. III, Issue 06).

## AI replaces coders. It won't replace engineers.

May 2026 · ENGINEERING

Coding turns a known solution into syntax. Engineering works out what the solution should be, against requirements that contradict each other and tradeoffs nobody wrote down. Models handle the first job now. I only got better at the second one by shipping things that broke.

## Fast-track semester 7: best or worst decision

Apr 2026 · ACADEMIC

Compressing a semester changes how the material lands. Some of it clicks faster under pressure than it would have otherwise. The rest never settles, because there is no gap left for it to settle into. Ask me in December which half won.

## lindblad exists because I hit the Qiskit wall

Mar 2026 · QUANTUM

I needed more qubits than my workflow would give me, so I started writing my own simulator. lindblad now feeds the MA-QAOA energy-grid work. Owning the backend changes which experiments I can run at all, not just how fast they finish.

## Barren plateaus are terrifying

Mar 2026 · QUANTUM

The deeper the QAOA circuit, the flatter the gradient landscape gets. Layerwise Freezing helps. I doubt it survives at scale. Re-reading Cerezo et al. this week to find out where it breaks.

## NotBigBrother might matter

Mar 2026 · PRIVACY

Most age-verification systems are surveillance pipelines wearing a legal cover story. Chaum blind signatures split the identity check from the activity log, so the issuer and the site each learn one half and neither learns you. The cryptography holds up fine. Convincing a regulator to require it is the part I have no idea how to do.

## ResNet-50 beat EfficientNet on defect classification

Feb 2026 · ML

EfficientNet is meant to be the parameter-efficient one, and it lost: ResNet-50 on GPU hit 89.03% against EfficientNet-B0's 84.95%. My guess is the skip connections carry low-level texture through the network, and a surface defect is mostly texture.

## NFC + Camera on Android is a nightmare

Jan 2026 · SYSTEMS

On Samsung devices, CameraService suppresses NFC polling while a CameraCaptureSession is open. Three days to find that. The fix was a custom MauiCameraViewHandler that waits on CAMERA_STATE_CLOSED before it re-enables polling.

## A real process changes how the build feels

Mar 2026 · SYSTEMS

ResearchSync is the first project where I followed a structured SDLC instead of improvising as I went. The build was calmer. When something broke two increments later I could find it, because I had written down why the thing existed in the first place.
