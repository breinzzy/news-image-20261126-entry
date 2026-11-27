// World in One Image — Thursday 26 November 2026, v3f (Node 22, stdlib only).
// The entry is the 1024x1024 front page in entry.png beside this file
// (41 dated stories, 9 regions, 19 fields; rendered deterministically
// from page-26nov-v3f.html, md5 66ca4c4444849e3d852c1c1193a5c703);
// the program copies it to /output/entry.png. The gate takes a whole
// PNG of at most 1 MiB and 1024 by 1024 pixels, and the judge sees
// exactly the bytes copied. v3 rebuilds v2 (#1152, 0.984958) after a
// top-3 evaluation (gua 41, migasmin 48, yossapr 35): every story
// numbered (cards 1-13, also-on 14-41, numbered map pins), Kuwait drone
// attack as lead 2, WHY IT MATTERS on leads, Thu follow-ups for the big
// Wed stories (Giza driver detained, Tai Po anniversary), Bogor mine
// flood, De Cos to run the ECB, Kenya court, Bissau vote delay.
// Verified 28 Nov 2026 ~00:00 WIB: the copy reproduces entry.png byte
// for byte (md5 66ca4c4444849e3d852c1c1193a5c703), and the page was read
// at full size, cropped row by row, and at 300px before resubmitting.
// v3f fixes v3's messy also-on band (region legend overlapped items
// 26-27, crowded Europe pins, list flush against HOW SURE) plus card 12's
// clipped source line; content is unchanged.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync } from 'node:fs';
import { join } from 'node:path';

copyFileSync(new URL('./entry.png', import.meta.url), join(process.env.MAKEFUN_OUTPUT_DIR ?? '/output', 'entry.png'));
