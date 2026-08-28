[
    { $match: { order } },
    {
        $group: {
            _id: null,
            total: { $sum: '$amount' },
        },
    },
]
