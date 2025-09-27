/**
 * @swagger
 * tags:
 *   name: Authentication
 *   description: User registration
 */

/**
 * @swagger
 * /api/naizz/signup:
 *   post:
 *     tags:
 *       - Authentication
 *     summary: User registration
 *     description: Allows a new user to register with name, email, and password.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - emailAdress
 *               - password
 *             properties:
 *               name:
 *                 type: string
 *                 example: Jean Dupont
 *               emailAdress:
 *                 type: string
 *                 format: email
 *                 example: jean.dupont@example.com
 *               password:
 *                 type: string
 *                 format: password
 *                 example: mypassword123
 *     responses:
 *       201:
 *         description: Registration successful
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: User Jean Dupont has been registered successfully.
 *                 data:
 *                   type: object
 *                   description: Newly created user data
 *       400:
 *         description: Validation or signup error (e.g., email already exists)
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Email already registered.
 *                 data:
 *                   type: string
 *                   nullable: true
 *       500:
 *         description: Server error during registration
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: An error occurred during registration. Please try again.
 *                 data:
 *                   type: string
 */
/*
const supabase = require("../db/supabaseClient");

module.exports = (app) => {
  app.post("/api/naizz/signup", async (req, res) => {
    try {
      const { name, emailAdress, password } = req.body;

      const { data, error } = await supabase.auth.signUp({
        email: emailAdress,
        password,
        options: { data: { name } },
      });

      if (error) {
        console.error("Error signing up:", error);
        return res.status(400).json({ message: error.message, data: null });
      }

      return res.status(201).json({
        message: `User ${name} has been registered successfully.`,
        data,
      });
    } catch (error) {
      return res.status(500).json({
        message: "An error occurred during registration. Please try again.",
        data: error.message,
      });
    }
  });
};
*/