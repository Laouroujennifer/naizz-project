/**
 * @swagger
 * tags:
 *   name: Authentication
 *   description: User authentication
 */

/**
 * @swagger
 * /api/naizz/login:
 *   post:
 *     tags:
 *       - Authentication
 *     summary: User login
 *     description: Allows a user to log in using their email and password.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - emailAdress
 *               - password
 *             properties:
 *               emailAdress:
 *                 type: string
 *                 format: email
 *                 example: jean.dupont@example.com
 *               password:
 *                 type: string
 *                 example: mypassword123
 *     responses:
 *       200:
 *         description: Login successful
 *       401:
 *         description: Incorrect email or password
 *       500:
 *         description: Server error during login
 */
/*
const supabase = require("../db/supabaseClient");

module.exports = (app) => {
  app.post("/api/naizz/login", async (req, res) => {
    try {
      const { emailAdress, password } = req.body;

      const { data, error } = await supabase.auth.signInWithPassword({
        email: emailAdress,
        password,
      });

      if (error) {
        return res.status(401).json({
          message: error.message || "Invalid email or password.",
          data: null,
          token: null,
        });
      }

      return res.status(200).json({
        message: `User ${data.user?.email} has logged in successfully.`,
        data: data.user,
        token: data.session?.access_token,
      });
    } catch (err) {
      return res.status(500).json({
        message: "An error occurred during login. Please try again.",
        data: err.message,
        token: null,
      });
    }
  });
};*/
