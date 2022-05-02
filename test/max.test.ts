import tendency, { max, not } from '../src/tendency'
import { expect } from 'chai'

describe('max()', () => {
  describe('basic behaviour', () => {
    it('without conditions', () => {
      const result = tendency(max(0, 'a', 'b', 'c'))
      expect(result).to.equal('a b c')
    })

    it('without conditions multiple calls', () => {
      const result = tendency(max(0, 'a'), max(0, 'b'), max(0, 'c'))
      expect(result).to.equal('a b c')
    })

    it('1 valid condition', () => {
      const result = tendency(true, max(1, 'a', 'b', 'c'))
      expect(result).to.equal('a b c')
    })

    it('1 valid condition multiple calls', () => {
      const result = tendency(true, max(1, 'a'), max(1, 'b'), max(1, 'c'))
      expect(result).to.equal('a b c')
    })

    it('2 valid conditions', () => {
      const result = tendency(true, true, max(2, 'a', 'b', 'c'))
      expect(result).to.equal('a b c')
    })

    it('2 valid conditions multiple calls', () => {
      const result = tendency(true, max(2, 'a'), true, max(2, 'b'), max(2, 'c'))
      expect(result).to.equal('a b c')
    })

    it('3 valid conditions', () => {
      const result = tendency(true, true, true, max(3, 'a', 'b', 'c'))
      expect(result).to.equal('a b c')
    })

    it('3 valid conditions multiple calls', () => {
      const result = tendency(true, max(3, 'a'), true, max(3, 'b'), true, max(3, 'c'))
      expect(result).to.equal('a b c')
    })

    it('only invalid conditions', () => {
      const result = tendency(false, max(1, 'a', 'b', 'c'))
      expect(result).to.equal('a b c')
    })

    it('only invalid conditions multiple calls', () => {
      const result = tendency(false, max(1, 'a'), max(1, 'b'), max(1, 'c'))
      expect(result).to.equal('a b c')
    })

    it('mixed conditions', () => {
      const result = tendency(true, false, max(1, 'a', 'b', 'c'))
      expect(result).to.equal('a b c')
    })

    it('mixed conditions multiple calls', () => {
      const result = tendency(true, false, max(1, 'a'), max(1, 'b'), max(1, 'c'))
      expect(result).to.equal('a b c')
    })
  })

  describe('conditions not fulfilled', () => {
    it('maximum 0 with 1 condition', () => {
      const result = tendency(true, max(0, 'a', 'b', 'c'))
      expect(result).to.equal('')
    })

    it('maximum 0 with 1 condition multiple calls', () => {
      const result = tendency(true, max(0, 'a'), max(0, 'b'), max(0, 'c'))
      expect(result).to.equal('')
    })

    it('maximum 1 with 2 conditions', () => {
      const result = tendency(true, true, max(1, 'a', 'b', 'c'))
      expect(result).to.equal('')
    })

    it('maximum 1 with 2 conditions multiple calls', () => {
      const result = tendency(true, true, max(1, 'a'), max(1, 'b'), max(1, 'c'))
      expect(result).to.equal('')
    })

    it('maximum 2 with 3 conditions', () => {
      const result = tendency(true, true, true, max(2, 'a', 'b', 'c'))
      expect(result).to.equal('')
    })

    it('maximum 2 with 3 conditions multiple calls', () => {
      const result = tendency(true, true, true, max(2, 'a'), max(1, 'b'), max(1, 'c'))
      expect(result).to.equal('')
    })
  })

  describe('conditions exceeded', () => {
    it('maximum 1 without conditions', () => {
      const result = tendency(max(1, 'a', 'b', 'c'))
      expect(result).to.equal('a b c')
    })

    it('maximum 1 without conditions multiple calls', () => {
      const result = tendency(max(1, 'a'), max(1, 'b'), max(1, 'c'))
      expect(result).to.equal('a b c')
    })

    it('maximum 2 with 1 condition', () => {
      const result = tendency(true, max(2, 'a', 'b', 'c'))
      expect(result).to.equal('a b c')
    })

    it('maximum 2 with 1 condition multiple calls', () => {
      const result = tendency(true, max(2, 'a'), max(2, 'b'), max(2, 'c'))
      expect(result).to.equal('a b c')
    })

    it('maximum 3 with 2 conditions', () => {
      const result = tendency(true, true, max(3, 'a', 'b', 'c'))
      expect(result).to.equal('a b c')
    })

    it('maximum 3 with 2 conditions multiple calls', () => {
      const result = tendency(true, true, max(3, 'a'), not.max(2, 'b'), not.max(2, 'c'))
      expect(result).to.equal('a b c')
    })
  })

  describe('nested behaviour', () => {
    it('without conditions', () => {
      const result = tendency(max(0, 'a', max(0, 'b', max(0, 'c'))))
      expect(result).to.equal('a b c')
    })

    it('complex without conditions', () => {
      const result = tendency(max(0, 'a', 'b', max(0, 'c', 'd', max(0, 'e', 'f'), 'g'), 'h'))
      expect(result).to.equal('a b c d e f g h')
    })

    it('1 basic valid condition', () => {
      const result = tendency(true, max(1, true, 'a', max(1, true, 'b', max(1, 'c'))))
      expect(result).to.equal('a b c')
    })

    it('1 complex valid conditions', () => {
      const result = tendency(true, max(1, true, 'a', 'b', max(1, true, 'c', 'd', max(1, 'e', 'f'), 'g'), 'h'))
      expect(result).to.equal('a b c d e f g h')
    })

    it('2 basic valid condition', () => {
      const result = tendency(true, true, max(2, true, true, 'a', max(2, true, true, 'b', max(2, 'c'))))
      expect(result).to.equal('a b c')
    })

    it('2 complex valid conditions', () => {
      const result = tendency(true, true, max(2, true, true, 'a', 'b', max(2, true, true, 'c', 'd', max(2, 'e', 'f'), 'g'), 'h'))
      expect(result).to.equal('a b c d e f g h')
    })

    it('3 basic valid condition', () => {
      const result = tendency(true, true, true, max(3, true, true, true, 'a', max(3, true, true, true, 'b', max(3, 'c'))))
      expect(result).to.equal('a b c')
    })

    it('3 complex valid conditions', () => {
      const result = tendency(true, true, true, max(3, true, true, true, 'a', 'b', max(3, true, true, true, 'c', 'd', max(3, 'e', 'f'), 'g'), 'h'))
      expect(result).to.equal('a b c d e f g h')
    })

    it('invalid conditions', () => {
      const result = tendency(false, max(1, 'a', [false, max(1, 'b', [false, max(1, 'c')])]))
      expect(result).to.equal('a b c')
    })

    it('mixed conditions', () => {
      const result = tendency(true, max(1, 'a', [false, max(1, 'b', [true, max(1, 'c')])]))
      expect(result).to.equal('a b c')
    })
  })
})
