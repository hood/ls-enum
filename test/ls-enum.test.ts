import lsEnum from '../src/index';

describe('lsEnum', () => {
  it('works for enums with strings as values', () => {
    enum TestEnum {
      KeyA = 'ValueA',
      KeyB = 'ValueB',
    }

    expect(lsEnum(TestEnum)).toEqual(['ValueA', 'ValueB']);
  });

  it('works for enums with numbers as values', () => {
    enum TestEnum {
      KeyA = 1,
      KeyB = 2,
    }

    expect(lsEnum(TestEnum)).toEqual([1, 2]);
  });

  it('works for enums with both strings and numbers as values', () => {
    enum TestEnum {
      KeyA = 'ValueA',
      KeyB = 2,
    }

    expect(lsEnum(TestEnum)).toEqual(['ValueA', 2]);
  });

  it('works for enums with implicit values', () => {
    enum TestEnum {
      KeyA,
      KeyB,
    }

    expect(lsEnum(TestEnum)).toEqual([0, 1]);
  });

  // NOTE: This is not needed, since it'd throw a 'enum property needs to be initialzied'
  // exception.
  // it('works for enums with both explicit and implicit values', () => {
  //   enum TestEnum {
  //     KeyA = 'ValueA',
  //     KeyB,
  //   }
  //
  //   expect(lsEnum(TestEnum)).toEqual(['ValueA', 1]);
  // });
});
