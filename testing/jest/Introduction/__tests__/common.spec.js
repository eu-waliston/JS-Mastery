test('2 + 2 = 4', () => {
    expect(2+2).toBe(4)
});

test('Object validation', () => {
    const data = {username: 'wal'}
    const data2 = {username: 'wizard'}

    expect(data).toEqual({username: 'wal'})
    expect(data).not.toEqual(data2);
});
