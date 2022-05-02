import tendency, { min } from '../src/index'
import { expect } from 'chai'

describe('min()', () => {
  describe('basic behaviour', () => {
    it('without conditions', () => {
      const result = tendency(min(0, 'a', 'b', 'c'))
      expect(result).to.equal('a b c')
    })

    it('without conditions multiple calls', () => {
      const result = tendency(min(0, 'a'), min(0, 'b'), min(0, 'c'))
      expect(result).to.equal('a b c')
    })

    it('1 valid condition', () => {
      const result = tendency(true, min(1, 'a', 'b', 'c'))
      expect(result).to.equal('a b c')
    })

    it('1 valid condition multiple calls', () => {
      const result = tendency(true, min(1, 'a'), min(1, 'b'), min(1, 'c'))
      expect(result).to.equal('a b c')
    })

    it('2 valid conditions', () => {
      const result = tendency(true, true, min(2, 'a', 'b', 'c'))
      expect(result).to.equal('a b c')
    })

    it('2 valid conditions multiple calls', () => {
      const result = tendency(true, min(2, 'a'), true, min(2, 'b'), min(2, 'c'))
      expect(result).to.equal('a b c')
    })

    it('3 valid conditions', () => {
      const result = tendency(true, true, true, min(3, 'a', 'b', 'c'))
      expect(result).to.equal('a b c')
    })

    it('3 valid conditions multiple calls', () => {
      const result = tendency(true, min(3, 'a'), true, min(3, 'b'), true, min(3, 'c'))
      expect(result).to.equal('a b c')
    })

    it('only invalid conditions', () => {
      const result = tendency(false, min(1, 'a', 'b', 'c'))
      expect(result).to.equal('')
    })

    it('only invalid conditions multiple calls', () => {
      const result = tendency(false, min(1, 'a'), min(1, 'b'), min(1, 'c'))
      expect(result).to.equal('')
    })

    it('mixed conditions', () => {
      const result = tendency(true, false, min(1, 'a', 'b', 'c'))
      expect(result).to.equal('a b c')
    })

    it('mixed conditions multiple calls', () => {
      const result = tendency(true, false, min(1, 'a'), min(1, 'b'), min(1, 'c'))
      expect(result).to.equal('a b c')
    })
  })

  describe('condition not fulfilled', () => {
    it('minimum 1 without conditions', () => {
      const result = tendency(min(1, 'a', 'b', 'c'))
      expect(result).to.equal('')
    })

    it('minimum 1 without conditions multiple calls', () => {
      const result = tendency(min(1, 'a'), min(1, 'b'), min(1, 'c'))
      expect(result).to.equal('')
    })

    it('minimum 2 with 1 condition', () => {
      const result = tendency(true, min(2, 'a', 'b', 'c'))
      expect(result).to.equal('')
    })

    it('minimum 2 with 1 condition multiple calls', () => {
      const result = tendency(true, min(2, 'a'), min(2, 'b'), min(2, 'c'))
      expect(result).to.equal('')
    })

    it('minimum 3 with 2 conditions', () => {
      const result = tendency(true, true, min(3, 'a', 'b', 'c'))
      expect(result).to.equal('')
    })

    it('minimum 3 with 1 conditions multiple calls', () => {
      const result = tendency(true, true, min(3, 'a'), min(3, 'b'), min(3, 'c'))
      expect(result).to.equal('')
    })
  })

  describe('conditions exceeded', () => {
    it('minimum 0 with 1 condition', () => {
      const result = tendency(true, min(0, 'a', 'b', 'c'))
      expect(result).to.equal('a b c')
    })

    it('minimum 0 with 1 condition multiple calls', () => {
      const result = tendency(true, min(0, 'a'), min(0, 'b'), min(0, 'c'))
      expect(result).to.equal('a b c')
    })

    it('minimum 1 with 2 conditions', () => {
      const result = tendency(true, true, min(1, 'a', 'b', 'c'))
      expect(result).to.equal('a b c')
    })

    it('minimum 1 with 2 conditions multiple calls', () => {
      const result = tendency(true, true, min(1, 'a'), min(1, 'b'), min(1, 'c'))
      expect(result).to.equal('a b c')
    })

    it('minimum 2 with 3 conditions', () => {
      const result = tendency(true, true, true, min(2, 'a', 'b', 'c'))
      expect(result).to.equal('a b c')
    })

    it('minimum 2 with 3 conditions multiple calls', () => {
      const result = tendency(true, true, true, min(2, 'a'), min(1, 'b'), min(1, 'c'))
      expect(result).to.equal('a b c')
    })
  })

  describe('nested behaviour', () => {
    it('without conditions', () => {
      const result = tendency(min(0, 'a', min(0, 'b', min(0, 'c'))))
      expect(result).to.equal('a b c')
    })

    it('complex without conditions', () => {
      const result = tendency(min(0, 'a', 'b', min(0, 'c', 'd', min(0, 'e', 'f'), 'g'), 'h'))
      expect(result).to.equal('a b c d e f g h')
    })

    it('1 basic valid condition', () => {
      const result = tendency(true, min(1, true, 'a', min(1, true, 'b', min(1, 'c'))))
      expect(result).to.equal('a b c')
    })

    it('1 complex valid conditions', () => {
      const result = tendency(true, min(1, true, 'a', 'b', min(1, true, 'c', 'd', min(1, 'e', 'f'), 'g'), 'h'))
      expect(result).to.equal('a b c d e f g h')
    })

    it('2 basic valid condition', () => {
      const result = tendency(true, true, min(2, true, true, 'a', min(2, true, true, 'b', min(2, 'c'))))
      expect(result).to.equal('a b c')
    })

    it('2 complex valid conditions', () => {
      const result = tendency(true, true, min(2, true, true, 'a', 'b', min(2, true, true, 'c', 'd', min(2, 'e', 'f'), 'g'), 'h'))
      expect(result).to.equal('a b c d e f g h')
    })

    it('3 basic valid condition', () => {
      const result = tendency(true, true, true, min(3, true, true, true, 'a', min(3, true, true, true, 'b', min(3, 'c'))))
      expect(result).to.equal('a b c')
    })

    it('3 complex valid conditions', () => {
      const result = tendency(true, true, true, min(3, true, true, true, 'a', 'b', min(3, true, true, true, 'c', 'd', min(3, 'e', 'f'), 'g'), 'h'))
      expect(result).to.equal('a b c d e f g h')
    })

    it('invalid conditions', () => {
      const result = tendency(false, min(1, 'a', [false, min(1, 'b', [false, min(1, 'c')])]))
      expect(result).to.equal('')
    })

    it('mixed conditions', () => {
      const result = tendency(true, min(1, 'a', [false, min(1, 'b', [true, min(1, 'c')])]))
      expect(result).to.equal('a')
    })
  })
})
