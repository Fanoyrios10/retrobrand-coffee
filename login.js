const mysql = require('mysql');
const express = require('express');
const session = require('express-session');
const path = require('path');

const connection = mysql.createConnection({
  host: 'sql11.freesqldatabase.com',
  user: 'sql11512973',
  password: 'Bi2610642610!!!',
  database: 'sql11512973',
  port: 3306,
});
