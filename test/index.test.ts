import tendency from '../src/tendency'
import { expect } from 'chai'

describe('tendency()', () => {
  describe('basic behaviour', () => {
    it('without conditions', () => {
      const result = tendency('a', 'b', 'c')
      expect(result).to.equal('a b c')
    })

    it('valid condition', () => {
      const result = tendency(true, 'a', 'b', 'c')
      expect(result).to.equal('a b c')
    })

    it('multiple valid conditions', () => {
      const result = tendency(true, 'a', true, 'b', true, 'c')
      expect(result).to.equal('a b c')
    })

    it('invalid condition', () => {
      const result = tendency(false, 'a', 'b', 'c')
      expect(result).to.equal('')
    })

    it('multiple invalid conditions', () => {
      const result = tendency(false, 'a', false, 'b', false, 'c')
      expect(result).to.equal('')
    })

    it('mixed conditions', () => {
      const result = tendency(true, false, 'a', 'b', 'c')
      expect(result).to.equal('')
    })
  })

  describe('nested parameters', () => {
    it('flatten 1 level', () => {
      const result = tendency(['a', 'b', 'c'])
      expect(result).to.equal('a b c')
    })

    it('flatten 2 levels', () => {
      const result = tendency([['a', 'b', 'c']])
      expect(result).to.equal('a b c')
    })

    it('flatten 3 levels', () => {
      const result = tendency([[['a', 'b', 'c']]])
      expect(result).to.equal('a b c')
    })

    it('flatten complex pattern', () => {
      const result = tendency(['a', [['b'], [['c']]]])
      expect(result).to.equal('a b c')
    })
  })

  describe('nested conditions', () => {
    it('only valid conditions', () => {
      const result = tendency(true, 'a', [true, 'b', [true, 'c']])
      expect(result).to.equal('a b c')
    })

    it('only invalid conditions', () => {
      const result = tendency(false, 'a', [false, 'b', [false, 'c']])
      expect(result).to.equal('')
    })

    it('mixed conditions', () => {
      const result = tendency(true, 'a', [false, 'b', [true, 'c']])
      expect(result).to.equal('a')
    })
  })

  describe('special parameters', () => {
    it('no parameters', () => {
      const result = tendency()
      expect(result).to.equal('')
    })

    it('number as parameter', () => {
      const result = tendency('a', 0, 'b', 1, 'c', 2)
      expect(result).to.equal('a 0 b 1 c 2')
    })

    it('null as parameter', () => {
      const result = tendency('a', null, 'b', null, 'c', null)
      expect(result).to.equal('a b c')
    })

    it('undefined as parameter', () => {
      const result = tendency('a', undefined, 'b', undefined, 'c', undefined)
      expect(result).to.equal('a b c')
    })

    it('empty array', () => {
      const result = tendency('a', [], 'b', [], 'c', [])
      expect(result).to.equal('a b c')
    })

    it('empty strings', () => {
      const result = tendency('a', '', 'b', '', 'c', '')
      expect(result).to.equal('a b c')
    })
  })

  describe('configuration', () => {
    describe('separator', () => {
      it('usage', () => {
        const result = tendency({ separator: '-' }, 'a', 'b', 'c')
        expect(result).to.equal('a-b-c')
      })

      it('inheritance', () => {
        const result = tendency({ separator: '-' }, 'a', ['b', 'c'])
        expect(result).to.equal('a-b-c')
      })

      it('deep changes', () => {
        const result = tendency({ separator: '-' }, 'a', [{ separator: '_' }, 'b', 'c'])
        expect(result).to.equal('a-b_c')
      })
    })
  })
})
