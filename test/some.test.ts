import tendency, { some } from '../src/tendency'
import { expect } from 'chai'

describe('some()', () => {
  describe('basic behaviour', () => {
    it('without conditions', () => {
      const result = tendency(some('a', 'b', 'c'))
      expect(result).to.equal('')
    })

    it('without conditions; multiple calls', () => {
      const result = tendency(some('a'), some('b'), some('c'))
      expect(result).to.equal('')
    })

    it('1 valid condition', () => {
      const result = tendency(true, some('a', 'b', 'c'))
      expect(result).to.equal('a b c')
    })

    it('1 valid condition; multiple calls', () => {
      const result = tendency(true, some('a'), some('b'), some('c'))
      expect(result).to.equal('a b c')
    })

    it('2 valid conditions', () => {
      const result = tendency(true, true, some('a', 'b', 'c'))
      expect(result).to.equal('a b c')
    })

    it('2 valid conditions; multiple calls', () => {
      const result = tendency(true, some('a'), true, some('b'), some('c'))
      expect(result).to.equal('a b c')
    })

    it('3 valid conditions', () => {
      const result = tendency(true, true, true, some('a', 'b', 'c'))
      expect(result).to.equal('a b c')
    })

    it('3 valid conditions; multiple calls', () => {
      const result = tendency(true, some('a'), true, some('b'), true, some('c'))
      expect(result).to.equal('a b c')
    })

    it('only invalid conditions', () => {
      const result = tendency(false, some('a', 'b', 'c'))
      expect(result).to.equal('')
    })

    it('only invalid conditions; multiple calls', () => {
      const result = tendency(false, some('a'), some('b'), some('c'))
      expect(result).to.equal('')
    })

    it('1 valid/1 invalid mixed conditions', () => {
      const result = tendency(true, false, some('a', 'b', 'c'))
      expect(result).to.equal('a b c')
    })

    it('1 valid/1 invalid mixed conditions; multiple calls', () => {
      const result = tendency(true, false, some('a'), some('b'), some('c'))
      expect(result).to.equal('a b c')
    })

    it('1 valid/2 invalid mixed conditions', () => {
      const result = tendency(true, false, false, some('a', 'b', 'c'))
      expect(result).to.equal('a b c')
    })

    it('1 valid/2 invalid mixed conditions; multiple calls', () => {
      const result = tendency(true, false, false, some('a'), some('b'), some('c'))
      expect(result).to.equal('a b c')
    })

    it('1 valid/3 invalid mixed conditions', () => {
      const result = tendency(true, false, false, false, some('a', 'b', 'c'))
      expect(result).to.equal('a b c')
    })

    it('1 valid/3 invalid mixed conditions; multiple calls', () => {
      const result = tendency(true, false, false, false, some('a'), some('b'), some('c'))
      expect(result).to.equal('a b c')
    })

    it('2 valid/1 invalid mixed conditions', () => {
      const result = tendency(true, true, false, some('a', 'b', 'c'))
      expect(result).to.equal('a b c')
    })

    it('2 valid/1 invalid mixed conditions; multiple calls', () => {
      const result = tendency(true, true, false, some('a'), some('b'), some('c'))
      expect(result).to.equal('a b c')
    })

    it('3 valid/1 invalid mixed conditions', () => {
      const result = tendency(true, true, true, false, some('a', 'b', 'c'))
      expect(result).to.equal('a b c')
    })

    it('3 valid/1 invalid mixed conditions; multiple calls', () => {
      const result = tendency(true, true, true, false, some('a'), some('b'), some('c'))
      expect(result).to.equal('a b c')
    })
  })

  describe('nested behaviour', () => {
    it('without conditions', () => {
      const result = tendency(some('a', some('b', some('c'))))
      expect(result).to.equal('')
    })

    it('complex without conditions', () => {
      const result = tendency(some('a', 'b', some('c', 'd', some('e', 'f'), 'g'), 'h'))
      expect(result).to.equal('')
    })

    it('valid conditions', () => {
      const result = tendency(true, some(true, 'a', some(true, 'b', some(true, 'c'))))
      expect(result).to.equal('a b c')
    })

    it('complex valid conditions', () => {
      const result = tendency(true, some(true, 'a', 'b', some(true, 'c', 'd', some(true, 'e', 'f'), 'g'), 'h'))
      expect(result).to.equal('a b c d e f g h')
    })

    it('invalid conditions', () => {
      const result = tendency(false, some('a', [false, some('b', [false, some('c')])]))
      expect(result).to.equal('')
    })

    it('mixed conditions', () => {
      const result = tendency(true, some('a', [false, some('b', [true, some('c')])]))
      expect(result).to.equal('a')
    })
  })
})
