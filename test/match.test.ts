import tendency, { match } from '../src/tendency'
import { expect } from 'chai'

describe('match()', () => {
  describe('basic behaviour', () => {
    it('without conditions', () => {
      const result = tendency(match(0, 'a', 'b', 'c'))
      expect(result).to.equal('a b c')
    })

    it('without conditions multiple calls', () => {
      const result = tendency(match(0, 'a'), match(0, 'b'), match(0, 'c'))
      expect(result).to.equal('a b c')
    })

    it('1 valid condition', () => {
      const result = tendency(true, match(1, 'a', 'b', 'c'))
      expect(result).to.equal('a b c')
    })

    it('1 valid condition multiple calls', () => {
      const result = tendency(true, match(1, 'a'), match(1, 'b'), match(1, 'c'))
      expect(result).to.equal('a b c')
    })

    it('2 valid conditions', () => {
      const result = tendency(true, true, match(2, 'a', 'b', 'c'))
      expect(result).to.equal('a b c')
    })

    it('2 valid conditions multiple calls', () => {
      const result = tendency(true, match(2, 'a'), true, match(2, 'b'), match(2, 'c'))
      expect(result).to.equal('a b c')
    })

    it('3 valid conditions', () => {
      const result = tendency(true, true, true, match(3, 'a', 'b', 'c'))
      expect(result).to.equal('a b c')
    })

    it('3 valid conditions multiple calls', () => {
      const result = tendency(true, match(3, 'a'), true, match(3, 'b'), true, match(3, 'c'))
      expect(result).to.equal('a b c')
    })

    it('only invalid conditions', () => {
      const result = tendency(false, match(1, 'a', 'b', 'c'))
      expect(result).to.equal('')
    })

    it('only invalid conditions multiple calls', () => {
      const result = tendency(false, match(1, 'a'), match(1, 'b'), match(1, 'c'))
      expect(result).to.equal('')
    })

    it('mixed conditions', () => {
      const result = tendency(true, false, match(1, 'a', 'b', 'c'))
      expect(result).to.equal('a b c')
    })

    it('mixed conditions multiple calls', () => {
      const result = tendency(true, false, match(1, 'a'), match(1, 'b'), match(1, 'c'))
      expect(result).to.equal('a b c')
    })
  })

  describe('condition not fulfilled', () => {
    it('match 1 without conditions', () => {
      const result = tendency(match(1, 'a', 'b', 'c'))
      expect(result).to.equal('')
    })

    it('match 1 without conditions multiple calls', () => {
      const result = tendency(match(1, 'a'), match(1, 'b'), match(1, 'c'))
      expect(result).to.equal('')
    })

    it('match 2 with 1 condition', () => {
      const result = tendency(true, match(2, 'a', 'b', 'c'))
      expect(result).to.equal('')
    })

    it('match 2 with 1 condition multiple calls', () => {
      const result = tendency(true, match(2, 'a'), match(2, 'b'), match(2, 'c'))
      expect(result).to.equal('')
    })
  })

  describe('nested behaviour', () => {
    it('without conditions', () => {
      const result = tendency(match(0, 'a', match(0, 'b', match(0, 'c'))))
      expect(result).to.equal('a b c')
    })

    it('complex without conditions', () => {
      const result = tendency(match(0, 'a', 'b', match(0, 'c', 'd', match(0, 'e', 'f'), 'g'), 'h'))
      expect(result).to.equal('a b c d e f g h')
    })

    it('1 basic valid condition', () => {
      const result = tendency(true, match(1, true, 'a', match(1, true, 'b', match(1, 'c'))))
      expect(result).to.equal('a b c')
    })

    it('1 complex valid conditions', () => {
      const result = tendency(true, match(1, true, 'a', 'b', match(1, true, 'c', 'd', match(1, 'e', 'f'), 'g'), 'h'))
      expect(result).to.equal('a b c d e f g h')
    })

    it('2 basic valid condition', () => {
      const result = tendency(true, true, match(2, true, true, 'a', match(2, true, true, 'b', match(2, 'c'))))
      expect(result).to.equal('a b c')
    })

    it('2 complex valid conditions', () => {
      const result = tendency(true, true, match(2, true, true, 'a', 'b', match(2, true, true, 'c', 'd', match(2, 'e', 'f'), 'g'), 'h'))
      expect(result).to.equal('a b c d e f g h')
    })

    it('3 basic valid condition', () => {
      const result = tendency(true, true, true, match(3, true, true, true, 'a', match(3, true, true, true, 'b', match(3, 'c'))))
      expect(result).to.equal('a b c')
    })

    it('3 complex valid conditions', () => {
      const result = tendency(true, true, true, match(3, true, true, true, 'a', 'b', match(3, true, true, true, 'c', 'd', match(3, 'e', 'f'), 'g'), 'h'))
      expect(result).to.equal('a b c d e f g h')
    })

    it('invalid conditions', () => {
      const result = tendency(false, match(1, 'a', [false, match(1, 'b', [false, match(1, 'c')])]))
      expect(result).to.equal('')
    })

    it('mixed conditions', () => {
      const result = tendency(true, match(1, 'a', [false, match(1, 'b', [true, match(1, 'c')])]))
      expect(result).to.equal('a')
    })
  })
})
