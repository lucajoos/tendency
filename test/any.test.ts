import tendency, { any } from '../src/tendency'
import { expect } from 'chai'

describe('any()', () => {
  describe('basic behaviour', () => {
    it('without conditions', () => {
      const result = tendency(any('a', 'b', 'c'))
      expect(result).to.equal('a b c')
    })

    it('without conditions multiple calls', () => {
      const result = tendency(any('a'), any('b'), any('c'))
      expect(result).to.equal('a b c')
    })

    it('only valid conditions', () => {
      const result = tendency(true, any('a', 'b', 'c'))
      expect(result).to.equal('a b c')
    })

    it('only valid conditions multiple calls', () => {
      const result = tendency(true, any('a'), any('b'), any('c'))
      expect(result).to.equal('a b c')
    })

    it('only invalid conditions', () => {
      const result = tendency(false, any('a', 'b', 'c'))
      expect(result).to.equal('a b c')
    })

    it('only invalid conditions multiple calls', () => {
      const result = tendency(false, any('a'), any('b'), any('c'))
      expect(result).to.equal('a b c')
    })

    it('mixed conditions', () => {
      const result = tendency(true, false, any('a', 'b', 'c'))
      expect(result).to.equal('a b c')
    })

    it('mixed conditions multiple calls', () => {
      const result = tendency(true, false, any('a'), any('b'), any('c'))
      expect(result).to.equal('a b c')
    })
  })

  describe('nested behaviour', () => {
    it('without conditions', () => {
      const result = tendency(any('a', any('b', any('c'))))
      expect(result).to.equal('a b c')
    })

    it('complex without conditions', () => {
      const result = tendency(any('a', 'b', any('c', 'd', any('e', 'f'), 'g'), 'h'))
      expect(result).to.equal('a b c d e f g h')
    })

    it('valid conditions', () => {
      const result = tendency(true, any(true, 'a', any(true, 'b', any(true, 'c'))))
      expect(result).to.equal('a b c')
    })

    it('complex valid conditions', () => {
      const result = tendency(true, any(true, 'a', 'b', any(true, 'c', 'd', any(true, 'e', 'f'), 'g'), 'h'))
      expect(result).to.equal('a b c d e f g h')
    })

    it('invalid conditions', () => {
      const result = tendency(false, any('a', [false, any('b', [false, any('c')])]))
      expect(result).to.equal('a b c')
    })

    it('mixed conditions', () => {
      const result = tendency(true, any('a', [false, any('b', [true, any('c')])]))
      expect(result).to.equal('a b c')
    })
  })
})
