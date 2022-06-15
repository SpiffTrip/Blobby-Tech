const router = require("express").Router();
const sequelize = require("../config/connection");
const withAuth = require("../utils/auth");
const { User, Post, Comment } = require("../models");

router.get("/", withAuth, (req, res) => {
    Post.findAll({
        where: {
            user_id: req.session.user_id,
        },
        attributes: ["id", "title", "post_text", "created_at"],
        include: [
            {
                model: Comment,
                attributes: ["id", "comment_text", "post_id", "user_id"],
                include: {
                    model: User,
                    attributes: ["username"],
                },
            },
            {
                model: User,
                attributes: ["username"],
            },
        ],
    })
        .then((dbPostData) => {
            const posts = dbPostData.map((post) => post.get({ plain: true }));
            res.render("dashboard", { posts, loggedIn: req.session.loggedIn });
        })
        .catch((err) => res.status(500).json(err));
});

// update post
router.get("/edit/:id", withAuth, (req, res) => {
    if (req.session.user_id) {
        Post.findOne({
            where: {
                id: req.params.id,
            },
            attributes: ["id", "title", "post_text", "created_at"],
            include: [
                {
                    model: Comment,
                    attributes: [
                        "id",
                        "comment_text",
                        "post_id",
                        "user_id",
                        "created_at",
                    ],
                    include: {
                        model: User,
                        attributes: ["username"],
                    },
                },
                { model: User, attributes: ["username"] },
            ],
        })
            .then((dbPostData) => {
                if (!dbPostData) {
                    res.status(404).json({ message: "No post was found" });
                    return;
                }

                const post = dbPostData.get({ plain: true });
                console.log(post);
                res.render("edit-post", { post, loggedIn: req.session.loggedIn });
            })
            .catch((err) => res.status(500).json(err));
    }
});

module.exports = router;
