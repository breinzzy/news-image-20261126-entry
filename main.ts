// World in One Image — Thursday 26 November 2026 (Node 22, stdlib only).
// The entry is the 1024x1024 front page in entry.png beside this file
// (36 dated stories, 9 regions, 15 fields; rendered deterministically
// from page-26nov.html, md5 fdc489f0de8e01686b728d08393f3172);
// the program copies it to /output/entry.png. The gate takes a whole
// PNG of at most 1 MiB and 1024 by 1024 pixels, and the judge sees
// exactly the bytes copied. Verified 26 Nov 2026 ~23:50 WIB: the copy
// reproduces entry.png byte for byte (md5 fdc489f0de8e01686b728d08393f3172),
// and the page was read at full size and at 300px before submitting.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync } from 'node:fs';
import { join } from 'node:path';

copyFileSync(new URL('./entry.png', import.meta.url), join(process.env.MAKEFUN_OUTPUT_DIR ?? '/output', 'entry.png'));
