const express = require('express');
const router = express.Router();

// import { createClient } from '@supabase/supabase-js';

// const supabaseUrl = 'https://uvetbyitnyfyvesznfxw.supabase.co';
// const supabaseKey = process.env.SUPABASE_KEY;
// const supabase = createClient(supabaseUrl, supabaseKey);

/* GET sign-up page. */
router.get('/sign-up', function (req, res, next) {
  res.render('sign-up');
});

router.post('/sign-up', async function (req, res, next) {
  const { data, error } = await supabase.from('User').insert([
    {
      emailAddress: 'abc@hotmail.com',
      password: '12345',
      isSuperAdmin: false,
    },
  ]);
  res.render('sign-up');
});

module.exports = router;
