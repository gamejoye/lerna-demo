'use strict';

import a from '../lib/index.js'
import { strict as assert } from 'assert'

assert.strictEqual(a(), 'Hello from a');
console.info('a tests passed');
