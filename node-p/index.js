const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/api/github-token', (req, res) => {
    const githubToken = process.env.GITHUB_TOKEN;

    if (!githubToken) {
        return res.status(500).json({ error: 'GitHub token not found' });
    }

    res.json({ token: githubToken });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
