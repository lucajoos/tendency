import tendency, { any, every, match, max, min, not, some } from '../src/index'
import { expect } from 'chai'

describe('mixed', () => {
  it('some(), match(), not.some() & not.match()', () => {
    const result = tendency(true, false, not.some('a', true, match(2, 'b'), not.match(0, 'c', true, some('d'))))
    expect(result).to.equal('a c d')
  })

  it('min(), max(), not.min() & not.max()', () => {
    const result = tendency(true, true, min(2, 'a', [false, true, not.min(2, 'b'), not.max(1, 'c', true, true, max(3, 'd'))]))
    expect(result).to.equal('a c d')
  })

  it('any(), every(), & not.every()', () => {
    const result = tendency(true, false, any('a', [false, every('b'), not.every('c')]))
    expect(result).to.equal('a c')
  })
})
