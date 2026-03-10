/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { glob } from 'glob';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const htmlPreviewPath = path.join(
  __dirname,
  '..',
  '..',
  '..',
  'packages',
  'html-test-app',
  'src',
  'preview-examples'
);

export async function resolveTestIds() {
  const files = await glob('*.html', {
    cwd: htmlPreviewPath,
    absolute: true,
    windowsPathsNoEscape: true,
  });

  return files.map((file) => path.basename(file, '.html')).sort();
}
