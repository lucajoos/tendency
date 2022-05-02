import tendency, { not } from '../src/index'
import { expect } from 'chai'

describe('not', () => {
  describe('not.every()', () => {
    describe('basic behaviour', () => {
      it('without conditions', () => {
        const result = tendency(not.every('a', 'b', 'c'))
        expect(result).to.equal('a b c')
      })

      it('without conditions multiple calls', () => {
        const result = tendency(not.every('a'), not.every('b'), not.every('c'))
        expect(result).to.equal('a b c')
      })

      it('1 invalid condition', () => {
        const result = tendency(false, not.every('a', 'b', 'c'))
        expect(result).to.equal('a b c')
      })

      it('1 invalid condition multiple calls', () => {
        const result = tendency(false, not.every('a'), not.every('b'), not.every('c'))
        expect(result).to.equal('a b c')
      })

      it('2 invalid conditions', () => {
        const result = tendency(false, false, not.every('a', 'b', 'c'))
        expect(result).to.equal('a b c')
      })

      it('2 invalid conditions multiple calls', () => {
        const result = tendency(false, not.every('a'), false, not.every('b'), not.every('c'))
        expect(result).to.equal('a b c')
      })

      it('3 invalid conditions', () => {
        const result = tendency(false, false, false, not.every('a', 'b', 'c'))
        expect(result).to.equal('a b c')
      })

      it('3 invalid conditions multiple calls', () => {
        const result = tendency(false, not.every('a'), false, not.every('b'), false, not.every('c'))
        expect(result).to.equal('a b c')
      })

      it('only valid conditions', () => {
        const result = tendency(true, not.every('a', 'b', 'c'))
        expect(result).to.equal('')
      })

      it('only valid conditions multiple calls', () => {
        const result = tendency(true, not.every('a'), not.every('b'), not.every('c'))
        expect(result).to.equal('')
      })

      it('mixed conditions', () => {
        const result = tendency(true, false, not.every('a', 'b', 'c'))
        expect(result).to.equal('')
      })

      it('mixed conditions multiple calls', () => {
        const result = tendency(true, false, not.every('a'), not.every('b'), not.every('c'))
        expect(result).to.equal('')
      })
    })

    describe('nested behaviour', () => {
      it('without conditions', () => {
        const result = tendency(not.every('a', not.every('b', not.every('c'))))
        expect(result).to.equal('a b c')
      })

      it('complex with without conditions', () => {
        const result = tendency(not.every('a', 'b', not.every('c', 'd', not.every('e', 'f'), 'g'), 'h'))
        expect(result).to.equal('a b c d e f g h')
      })

      it('invalid conditions', () => {
        const result = tendency(false, not.every(false, not.every(false, not.every('a'))))
        expect(result).to.equal('a')
      })

      it('valid conditions', () => {
        const result = tendency(true, not.every('a', [true, not.every('b', [true, not.every('c')])]))
        expect(result).to.equal('')
      })

      it('mixed conditions', () => {
        const result = tendency(false, not.every('a', [true, not.every('b', [false, not.every('c')])]))
        expect(result).to.equal('a')
      })
    })
  })

  describe('not.match()', () => {
    describe('basic behaviour', () => {
      it('without conditions', () => {
        const result = tendency(not.match(0, 'a', 'b', 'c'))
        expect(result).to.equal('a b c')
      })

      it('without conditions multiple calls', () => {
        const result = tendency(not.match(0, 'a'), not.match(0, 'b'), not.match(0, 'c'))
        expect(result).to.equal('a b c')
      })

      it('1 invalid condition', () => {
        const result = tendency(false, not.match(1, 'a', 'b', 'c'))
        expect(result).to.equal('a b c')
      })

      it('1 invalid condition multiple calls', () => {
        const result = tendency(false, not.match(1, 'a'), not.match(1, 'b'), not.match(1, 'c'))
        expect(result).to.equal('a b c')
      })

      it('2 invalid conditions', () => {
        const result = tendency(false, false, not.match(2, 'a', 'b', 'c'))
        expect(result).to.equal('a b c')
      })

      it('2 invalid conditions multiple calls', () => {
        const result = tendency(false, false, not.match(2, 'a'), true, not.match(2, 'b'), not.match(2, 'c'))
        expect(result).to.equal('a b c')
      })

      it('3 invalid conditions', () => {
        const result = tendency(false, false, false, not.match(3, 'a', 'b', 'c'))
        expect(result).to.equal('a b c')
      })

      it('3 invalid conditions multiple calls', () => {
        const result = tendency(false, not.match(3, 'a'), false, not.match(3, 'b'), false, not.match(3, 'c'))
        expect(result).to.equal('a b c')
      })

      it('only valid conditions', () => {
        const result = tendency(true, not.match(1, 'a', 'b', 'c'))
        expect(result).to.equal('')
      })

      it('only valid conditions multiple calls', () => {
        const result = tendency(true, not.match(1, 'a'), not.match(1, 'b'), not.match(1, 'c'))
        expect(result).to.equal('')
      })

      it('mixed conditions', () => {
        const result = tendency(true, false, not.match(1, 'a', 'b', 'c'))
        expect(result).to.equal('a b c')
      })

      it('mixed conditions multiple calls', () => {
        const result = tendency(true, false, not.match(1, 'a'), not.match(1, 'b'), not.match(1, 'c'))
        expect(result).to.equal('a b c')
      })
    })

    describe('condition not fulfilled', () => {
      it('match 1 without conditions', () => {
        const result = tendency(not.match(1, 'a', 'b', 'c'))
        expect(result).to.equal('')
      })

      it('match 1 without conditions multiple calls', () => {
        const result = tendency(not.match(1, 'a'), not.match(1, 'b'), not.match(1, 'c'))
        expect(result).to.equal('')
      })

      it('match 2 with 1 condition', () => {
        const result = tendency(false, not.match(2, 'a', 'b', 'c'))
        expect(result).to.equal('')
      })

      it('match 2 with 1 condition multiple calls', () => {
        const result = tendency(false, not.match(2, 'a'), not.match(2, 'b'), not.match(2, 'c'))
        expect(result).to.equal('')
      })
    })

    describe('nested behaviour', () => {
      it('without conditions', () => {
        const result = tendency(not.match(0, 'a', not.match(0, 'b', not.match(0, 'c'))))
        expect(result).to.equal('a b c')
      })

      it('complex without conditions', () => {
        const result = tendency(not.match(0, 'a', 'b', not.match(0, 'c', 'd', not.match(0, 'e', 'f'), 'g'), 'h'))
        expect(result).to.equal('a b c d e f g h')
      })

      it('1 basic invalid condition', () => {
        const result = tendency(false, not.match(1, false, not.match(1, false, not.match(1, 'a'))))
        expect(result).to.equal('a')
      })

      it('2 basic invalid condition', () => {
        const result = tendency(false, false, not.match(2, false, false, not.match(2, false, false, not.match(2, 'a'))))
        expect(result).to.equal('a')
      })

      it('3 basic invalid condition', () => {
        const result = tendency(false, false, false, not.match(3, false, false, false, not.match(3, false, false, false, not.match(3, 'a'))))
        expect(result).to.equal('a')
      })

      it('invalid conditions', () => {
        const result = tendency(true, not.match(1, 'a', [true, not.match(1, 'b', [true, not.match(1, 'c')])]))
        expect(result).to.equal('')
      })

      it('mixed conditions', () => {
        const result = tendency(false, not.match(1, 'a', [true, not.match(1, 'b', [false, not.match(1, 'c')])]))
        expect(result).to.equal('a')
      })
    })
  })

  describe('not.max()', () => {
    describe('basic behaviour', () => {
      it('without conditions', () => {
        const result = tendency(not.max(0, 'a', 'b', 'c'))
        expect(result).to.equal('a b c')
      })

      it('without conditions multiple calls', () => {
        const result = tendency(not.max(0, 'a'), not.max(0, 'b'), not.max(0, 'c'))
        expect(result).to.equal('a b c')
      })

      it('1 invalid condition', () => {
        const result = tendency(false, not.max(1, 'a', 'b', 'c'))
        expect(result).to.equal('a b c')
      })

      it('1 invalid condition multiple calls', () => {
        const result = tendency(false, not.max(1, 'a'), not.max(1, 'b'), not.max(1, 'c'))
        expect(result).to.equal('a b c')
      })

      it('2 invalid conditions', () => {
        const result = tendency(false, false, not.max(2, 'a', 'b', 'c'))
        expect(result).to.equal('a b c')
      })

      it('2 invalid conditions multiple calls', () => {
        const result = tendency(false, not.max(2, 'a'), false, not.max(2, 'b'), not.max(2, 'c'))
        expect(result).to.equal('a b c')
      })

      it('3 invalid conditions', () => {
        const result = tendency(false, false, false, not.max(3, 'a', 'b', 'c'))
        expect(result).to.equal('a b c')
      })

      it('3 invalid conditions multiple calls', () => {
        const result = tendency(false, not.max(3, 'a'), false, not.max(3, 'b'), false, not.max(3, 'c'))
        expect(result).to.equal('a b c')
      })

      it('only valid conditions', () => {
        const result = tendency(true, not.max(1, 'a', 'b', 'c'))
        expect(result).to.equal('a b c')
      })

      it('only valid conditions multiple calls', () => {
        const result = tendency(true, not.max(1, 'a'), not.max(1, 'b'), not.max(1, 'c'))
        expect(result).to.equal('a b c')
      })

      it('mixed conditions', () => {
        const result = tendency(true, false, not.max(1, 'a', 'b', 'c'))
        expect(result).to.equal('a b c')
      })

      it('mixed conditions multiple calls', () => {
        const result = tendency(true, false, not.max(1, 'a'), not.max(1, 'b'), not.max(1, 'c'))
        expect(result).to.equal('a b c')
      })
    })

    describe('conditions not fulfilled', () => {
      it('maximum 0 with 1 condition', () => {
        const result = tendency(false, not.max(0, 'a', 'b', 'c'))
        expect(result).to.equal('')
      })

      it('maximum 0 with 1 condition multiple calls', () => {
        const result = tendency(false, not.max(0, 'a'), not.max(0, 'b'), not.max(0, 'c'))
        expect(result).to.equal('')
      })

      it('maximum 1 with 2 conditions', () => {
        const result = tendency(false, false, not.max(1, 'a', 'b', 'c'))
        expect(result).to.equal('')
      })

      it('maximum 1 with 2 conditions multiple calls', () => {
        const result = tendency(false, false, not.max(1, 'a'), not.max(1, 'b'), not.max(1, 'c'))
        expect(result).to.equal('')
      })

      it('maximum 2 with 3 conditions', () => {
        const result = tendency(false, false, false, not.max(2, 'a', 'b', 'c'))
        expect(result).to.equal('')
      })

      it('maximum 2 with 3 conditions multiple calls', () => {
        const result = tendency(false, false, false, not.max(2, 'a'), not.max(1, 'b'), not.max(1, 'c'))
        expect(result).to.equal('')
      })
    })

    describe('conditions exceeded', () => {
      it('maximum 1 without conditions', () => {
        const result = tendency(not.max(1, 'a', 'b', 'c'))
        expect(result).to.equal('a b c')
      })

      it('maximum 1 without conditions multiple calls', () => {
        const result = tendency(not.max(1, 'a'), not.max(1, 'b'), not.max(1, 'c'))
        expect(result).to.equal('a b c')
      })

      it('maximum 2 with 1 condition', () => {
        const result = tendency(false, not.max(2, 'a', 'b', 'c'))
        expect(result).to.equal('a b c')
      })

      it('maximum 2 with 1 condition multiple calls', () => {
        const result = tendency(false, not.max(2, 'a'), not.max(2, 'b'), not.max(2, 'c'))
        expect(result).to.equal('a b c')
      })

      it('maximum 3 with 2 conditions', () => {
        const result = tendency(false, false, not.max(3, 'a', 'b', 'c'))
        expect(result).to.equal('a b c')
      })

      it('maximum 3 with 2 conditions multiple calls', () => {
        const result = tendency(false, false, not.max(3, 'a'), not.max(2, 'b'), not.max(2, 'c'))
        expect(result).to.equal('a b c')
      })
    })

    describe('nested behaviour', () => {
      it('without conditions', () => {
        const result = tendency(not.max(0, 'a', not.max(0, 'b', not.max(0, 'c'))))
        expect(result).to.equal('a b c')
      })

      it('1 basic invalid condition', () => {
        const result = tendency(false, not.max(1, false, not.max(1, false, not.max(1, 'a'))))
        expect(result).to.equal('a')
      })

      it('2 basic invalid condition', () => {
        const result = tendency(false, false, not.max(2, false, false, not.max(2, false, true, not.max(2, 'a'))))
        expect(result).to.equal('a')
      })

      it('3 basic invalid condition', () => {
        const result = tendency(false, false, false, not.max(3, false, false, false, not.max(3, false, false, false, not.max(3, 'a'))))
        expect(result).to.equal('a')
      })

      it('valid conditions', () => {
        const result = tendency(true, not.max(1, 'a', [true, not.max(1, 'b', [true, not.max(1, 'c')])]))
        expect(result).to.equal('a b c')
      })

      it('mixed conditions', () => {
        const result = tendency(true, not.max(1, 'a', [false, not.max(1, 'b', [true, not.max(1, 'c')])]))
        expect(result).to.equal('a b c')
      })
    })
  })

  describe('not.min()', () => {
    describe('basic behaviour', () => {
      it('without conditions', () => {
        const result = tendency(not.min(0, 'a', 'b', 'c'))
        expect(result).to.equal('a b c')
      })

      it('without conditions multiple calls', () => {
        const result = tendency(not.min(0, 'a'), not.min(0, 'b'), not.min(0, 'c'))
        expect(result).to.equal('a b c')
      })

      it('1 invalid condition', () => {
        const result = tendency(false, not.min(1, 'a', 'b', 'c'))
        expect(result).to.equal('a b c')
      })

      it('1 invalid condition multiple calls', () => {
        const result = tendency(false, not.min(1, 'a'), not.min(1, 'b'), not.min(1, 'c'))
        expect(result).to.equal('a b c')
      })

      it('2 invalid conditions', () => {
        const result = tendency(false, false, not.min(2, 'a', 'b', 'c'))
        expect(result).to.equal('a b c')
      })

      it('2 invalid conditions multiple calls', () => {
        const result = tendency(false, not.min(2, 'a'), false, not.min(2, 'b'), not.min(2, 'c'))
        expect(result).to.equal('a b c')
      })

      it('3 invalid conditions', () => {
        const result = tendency(false, false, false, not.min(3, 'a', 'b', 'c'))
        expect(result).to.equal('a b c')
      })

      it('3 invalid conditions multiple calls', () => {
        const result = tendency(false, not.min(3, 'a'), false, not.min(3, 'b'), false, not.min(3, 'c'))
        expect(result).to.equal('a b c')
      })

      it('only valid conditions', () => {
        const result = tendency(true, not.min(1, 'a', 'b', 'c'))
        expect(result).to.equal('')
      })

      it('only invalid conditions multiple calls', () => {
        const result = tendency(true, not.min(1, 'a'), not.min(1, 'b'), not.min(1, 'c'))
        expect(result).to.equal('')
      })

      it('mixed conditions', () => {
        const result = tendency(true, false, not.min(1, 'a', 'b', 'c'))
        expect(result).to.equal('a b c')
      })

      it('mixed conditions multiple calls', () => {
        const result = tendency(true, false, not.min(1, 'a'), not.min(1, 'b'), not.min(1, 'c'))
        expect(result).to.equal('a b c')
      })
    })

    describe('condition not fulfilled', () => {
      it('minimum 1 without conditions', () => {
        const result = tendency(not.min(1, 'a', 'b', 'c'))
        expect(result).to.equal('')
      })

      it('minimum 1 without conditions multiple calls', () => {
        const result = tendency(not.min(1, 'a'), not.min(1, 'b'), not.min(1, 'c'))
        expect(result).to.equal('')
      })

      it('minimum 2 with 1 condition', () => {
        const result = tendency(false, not.min(2, 'a', 'b', 'c'))
        expect(result).to.equal('')
      })

      it('minimum 2 with 1 condition multiple calls', () => {
        const result = tendency(false, not.min(2, 'a'), not.min(2, 'b'), not.min(2, 'c'))
        expect(result).to.equal('')
      })

      it('minimum 3 with 2 condition', () => {
        const result = tendency(false, false, not.min(3, 'a', 'b', 'c'))
        expect(result).to.equal('')
      })

      it('minimum 3 with 2 condition multiple calls', () => {
        const result = tendency(false, false, not.min(3, 'a'), not.min(3, 'b'), not.min(3, 'c'))
        expect(result).to.equal('')
      })
    })

    describe('conditions exceeded', () => {
      it('minimum 0 with 1 condition', () => {
        const result = tendency(false, not.min(0, 'a', 'b', 'c'))
        expect(result).to.equal('a b c')
      })

      it('minimum 0 with 1 condition multiple calls', () => {
        const result = tendency(false, not.min(0, 'a'), not.min(0, 'b'), not.min(0, 'c'))
        expect(result).to.equal('a b c')
      })

      it('minimum 1 with 2 conditions', () => {
        const result = tendency(false, false, not.min(1, 'a', 'b', 'c'))
        expect(result).to.equal('a b c')
      })

      it('minimum 1 with 2 conditions multiple calls', () => {
        const result = tendency(false, false, not.min(1, 'a'), not.min(1, 'b'), not.min(1, 'c'))
        expect(result).to.equal('a b c')
      })

      it('minimum 2 with 3 conditions', () => {
        const result = tendency(false, false, false, not.min(2, 'a', 'b', 'c'))
        expect(result).to.equal('a b c')
      })

      it('minimum 2 with 3 conditions multiple calls', () => {
        const result = tendency(false, false, false, not.min(2, 'a'), not.min(1, 'b'), not.min(1, 'c'))
        expect(result).to.equal('a b c')
      })
    })

    describe('nested behaviour', () => {
      it('without conditions', () => {
        const result = tendency(not.min(0, 'a', not.min(0, 'b', not.min(0, 'c'))))
        expect(result).to.equal('a b c')
      })

      it('complex without conditions', () => {
        const result = tendency(not.min(0, 'a', 'b', not.min(0, 'c', 'd', not.min(0, 'e', 'f'), 'g'), 'h'))
        expect(result).to.equal('a b c d e f g h')
      })

      it('1 basic invalid condition', () => {
        const result = tendency(false, not.min(1, false, not.min(1, false, not.min(1, 'a'))))
        expect(result).to.equal('a')
      })

      it('2 basic invalid condition', () => {
        const result = tendency(false, false, not.min(2, false, false, not.min(2, false, false, not.min(2, 'a'))))
        expect(result).to.equal('a')
      })

      it('3 basic invalid condition', () => {
        const result = tendency(false, false, false, not.min(3, false, false, false, not.min(3, false, false, false, not.min(3, 'a'))))
        expect(result).to.equal('a')
      })

      it('valid conditions', () => {
        const result = tendency(true, not.min(1, 'a', [true, not.min(1, 'b', [true, not.min(1, 'c')])]))
        expect(result).to.equal('')
      })

      it('mixed conditions', () => {
        const result = tendency(false, not.min(1, 'a', [true, not.min(1, 'b', [false, not.min(1, 'c')])]))
        expect(result).to.equal('a')
      })
    })
  })

  describe('not.some()', () => {
    describe('basic behaviour', () => {
      it('without conditions', () => {
        const result = tendency(not.some('a', 'b', 'c'))
        expect(result).to.equal('')
      })

      it('without conditions; multiple calls', () => {
        const result = tendency(not.some('a'), not.some('b'), not.some('c'))
        expect(result).to.equal('')
      })

      it('1 invalid condition', () => {
        const result = tendency(false, not.some('a', 'b', 'c'))
        expect(result).to.equal('a b c')
      })

      it('1 invalid condition; multiple calls', () => {
        const result = tendency(false, not.some('a'), not.some('b'), not.some('c'))
        expect(result).to.equal('a b c')
      })

      it('2 invalid conditions', () => {
        const result = tendency(false, false, not.some('a', 'b', 'c'))
        expect(result).to.equal('a b c')
      })

      it('2 invalid conditions; multiple calls', () => {
        const result = tendency(false, not.some('a'), false, not.some('b'), not.some('c'))
        expect(result).to.equal('a b c')
      })

      it('3 invalid conditions', () => {
        const result = tendency(false, false, false, not.some('a', 'b', 'c'))
        expect(result).to.equal('a b c')
      })

      it('3 invalid conditions; multiple calls', () => {
        const result = tendency(false, not.some('a'), false, not.some('b'), false, not.some('c'))
        expect(result).to.equal('a b c')
      })

      it('only valid conditions', () => {
        const result = tendency(true, not.some('a', 'b', 'c'))
        expect(result).to.equal('')
      })

      it('only invalid conditions; multiple calls', () => {
        const result = tendency(true, not.some('a'), not.some('b'), not.some('c'))
        expect(result).to.equal('')
      })

      it('1 valid/1 invalid mixed conditions', () => {
        const result = tendency(true, false, not.some('a', 'b', 'c'))
        expect(result).to.equal('a b c')
      })

      it('1 valid/1 invalid mixed conditions; multiple calls', () => {
        const result = tendency(true, false, not.some('a'), not.some('b'), not.some('c'))
        expect(result).to.equal('a b c')
      })

      it('1 valid/2 invalid mixed conditions', () => {
        const result = tendency(true, false, false, not.some('a', 'b', 'c'))
        expect(result).to.equal('a b c')
      })

      it('1 valid/2 invalid mixed conditions; multiple calls', () => {
        const result = tendency(true, false, false, not.some('a'), not.some('b'), not.some('c'))
        expect(result).to.equal('a b c')
      })

      it('1 valid/3 invalid mixed conditions', () => {
        const result = tendency(true, false, false, false, not.some('a', 'b', 'c'))
        expect(result).to.equal('a b c')
      })

      it('1 valid/3 invalid mixed conditions; multiple calls', () => {
        const result = tendency(true, false, false, false, not.some('a'), not.some('b'), not.some('c'))
        expect(result).to.equal('a b c')
      })

      it('2 valid/1 invalid mixed conditions', () => {
        const result = tendency(true, true, false, not.some('a', 'b', 'c'))
        expect(result).to.equal('a b c')
      })

      it('2 valid/1 invalid mixed conditions; multiple calls', () => {
        const result = tendency(true, true, false, not.some('a'), not.some('b'), not.some('c'))
        expect(result).to.equal('a b c')
      })

      it('3 valid/1 invalid mixed conditions', () => {
        const result = tendency(true, true, true, false, not.some('a', 'b', 'c'))
        expect(result).to.equal('a b c')
      })

      it('3 valid/1 invalid mixed conditions; multiple calls', () => {
        const result = tendency(true, true, true, false, not.some('a'), not.some('b'), not.some('c'))
        expect(result).to.equal('a b c')
      })
    })

    describe('nested behaviour', () => {
      it('without conditions', () => {
        const result = tendency(not.some('a', not.some('b', not.some('c'))))
        expect(result).to.equal('')
      })

      it('complex without conditions', () => {
        const result = tendency(not.some('a', 'b', not.some('c', 'd', not.some('e', 'f'), 'g'), 'h'))
        expect(result).to.equal('')
      })

      it('valid conditions', () => {
        const result = tendency(false, not.some(false, not.some(false, not.some('a'))))
        expect(result).to.equal('a')
      })

      it('valid conditions', () => {
        const result = tendency(true, not.some('a', [true, not.some('b', [true, not.some('c')])]))
        expect(result).to.equal('')
      })

      it('mixed conditions', () => {
        const result = tendency(false, not.some('a', [true, not.some('b', [false, not.some('c')])]))
        expect(result).to.equal('a')
      })
    })
  })
})
