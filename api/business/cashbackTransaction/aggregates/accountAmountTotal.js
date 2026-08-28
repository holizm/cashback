[
    { $match: { cashbackAccount } },
    {
        $group: {
            _id: null,
            total: { $sum: '$amount' },
        },
    },
]
