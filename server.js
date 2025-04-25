// server.js
const express = require('express');
const bodyParser = require('body-parser');
const { v4: uuidv4 } = require('uuid');
const YooKassa = require('yookassa');

const yooKassa = new YooKassa({
  shopId: '997895',
  secretKey: 'live__uAYu3l-HJWBaLRATo01yAM-H2Lngg7ymmaSkNOCEIc'
});

app.post('/api/payments/yookassa', async (req, res) => {
  try {
    const { amount, description } = req.body;
    
    const payment = await yooKassa.createPayment({
      amount: {
        value: amount.toFixed(2),
        currency: 'RUB'
      },
      payment_method_data: {
        type: 'bank_card'
      },
      confirmation: {
        type: 'redirect',
        return_url: 'https://your-vpn-site.com/payment-success'
      },
      description: description,
      metadata: {
        planId: req.body.planId
      }
    });

    res.json({
      confirmation_url: payment.confirmation.confirmation_url
    });
    
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Payment creation failed' });
  }
});