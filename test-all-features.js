#!/usr/bin/env node

/**
 * ICSE Master - Comprehensive Feature Test Script
 * Tests all major features built in the project
 */

const API_URL = process.env.API_URL || 'http://127.0.0.1:3000';

// Test Results Storage
const results = {
  passed: 0,
  failed: 0,
  errors: [],
  features: {}
};

// Helper: Make API call
async function apiCall(endpoint, method = 'GET', data = null) {
  try {
    const options = {
      method,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer test-token'
      }
    };
    
    if (data) {
      options.body = JSON.stringify(data);
    }
    
    const response = await fetch(`${API_URL}${endpoint}`, options);
    return {
      status: response.status,
      data: await response.json(),
      ok: response.ok
    };
  } catch (error) {
    return {
      status: 0,
      error: error.message,
      ok: false
    };
  }
}

// Test: E-Notes Shopping Cart
async function testENotesCart() {
  console.log('\n📦 Testing E-Notes Shopping Cart...');
  const feature = { name: 'E-Notes Cart', tests: [] };
  
  try {
    // Test: Get e-notes list
    const enotesRes = await apiCall('/trpc/enotes.list?input={}');
    feature.tests.push({
      name: 'Get E-Notes List',
      passed: enotesRes.ok,
      status: enotesRes.status
    });
    
    // Test: Get cart
    const cartRes = await apiCall('/trpc/cart.get?input={}');
    feature.tests.push({
      name: 'Get Cart',
      passed: cartRes.ok,
      status: cartRes.status
    });
    
    // Test: Get purchases
    const purchasesRes = await apiCall('/trpc/purchases.list?input={}');
    feature.tests.push({
      name: 'Get Purchases',
      passed: purchasesRes.ok,
      status: purchasesRes.status
    });
    
  } catch (error) {
    feature.tests.push({
      name: 'Error',
      passed: false,
      error: error.message
    });
  }
  
  results.features['E-Notes Cart'] = feature;
  return feature;
}

// Test: Admin E-Notes Management
async function testAdminEnotes() {
  console.log('\n⚙️  Testing Admin E-Notes Management...');
  const feature = { name: 'Admin E-Notes', tests: [] };
  
  try {
    // Test: List all e-notes
    const listRes = await apiCall('/trpc/enotes.adminList?input={"grade":9}');
    feature.tests.push({
      name: 'Admin List E-Notes',
      passed: listRes.ok,
      status: listRes.status
    });
    
  } catch (error) {
    feature.tests.push({
      name: 'Error',
      passed: false,
      error: error.message
    });
  }
  
  results.features['Admin E-Notes'] = feature;
  return feature;
}

// Test: Analytics
async function testAnalytics() {
  console.log('\n📊 Testing Analytics Dashboard...');
  const feature = { name: 'Analytics', tests: [] };
  
  try {
    // Test: Get summary
    const summaryRes = await apiCall('/trpc/analytics.summary?input={"daysBack":30}');
    feature.tests.push({
      name: 'Get Analytics Summary',
      passed: summaryRes.ok,
      status: summaryRes.status
    });
    
    // Test: Get sales by date
    const salesRes = await apiCall('/trpc/analytics.salesByDate?input={"daysBack":30}');
    feature.tests.push({
      name: 'Get Sales by Date',
      passed: salesRes.ok,
      status: salesRes.status
    });
    
    // Test: Get top e-notes
    const topRes = await apiCall('/trpc/analytics.topEnotes?input={"daysBack":30}');
    feature.tests.push({
      name: 'Get Top E-Notes',
      passed: topRes.ok,
      status: topRes.status
    });
    
  } catch (error) {
    feature.tests.push({
      name: 'Error',
      passed: false,
      error: error.message
    });
  }
  
  results.features['Analytics'] = feature;
  return feature;
}

// Test: CSV Import
async function testCSVImport() {
  console.log('\n📥 Testing CSV Import...');
  const feature = { name: 'CSV Import', tests: [] };
  
  try {
    // Test: Parse CSV endpoint exists
    const parseRes = await apiCall('/trpc/questions.parseCSV', 'POST', {
      csvContent: 'Question,Opt1,Opt2,Opt3,Opt4,Correct,Explanation'
    });
    feature.tests.push({
      name: 'CSV Parse Endpoint',
      passed: parseRes.status !== 404,
      status: parseRes.status
    });
    
  } catch (error) {
    feature.tests.push({
      name: 'Error',
      passed: false,
      error: error.message
    });
  }
  
  results.features['CSV Import'] = feature;
  return feature;
}

// Test: Import History
async function testImportHistory() {
  console.log('\n📋 Testing Import History...');
  const feature = { name: 'Import History', tests: [] };
  
  try {
    // Test: Get import history
    const historyRes = await apiCall('/trpc/admin.importHistory.list?input={}');
    feature.tests.push({
      name: 'Get Import History',
      passed: historyRes.ok,
      status: historyRes.status
    });
    
    // Test: Get import stats
    const statsRes = await apiCall('/trpc/admin.importHistory.stats?input={}');
    feature.tests.push({
      name: 'Get Import Stats',
      passed: statsRes.ok,
      status: statsRes.status
    });
    
  } catch (error) {
    feature.tests.push({
      name: 'Error',
      passed: false,
      error: error.message
    });
  }
  
  results.features['Import History'] = feature;
  return feature;
}

// Main test runner
async function runAllTests() {
  console.log('🚀 ICSE Master - Comprehensive Feature Test');
  console.log('==========================================');
  console.log(`API URL: ${API_URL}`);
  console.log(`Time: ${new Date().toISOString()}`);
  
  // Run all tests
  await testENotesCart();
  await testAdminEnotes();
  await testAnalytics();
  await testCSVImport();
  await testImportHistory();
  
  // Calculate results
  for (const feature in results.features) {
    const tests = results.features[feature].tests;
    for (const test of tests) {
      if (test.passed) {
        results.passed++;
      } else {
        results.failed++;
        results.errors.push(`${feature} - ${test.name}: ${test.error || `Status ${test.status}`}`);
      }
    }
  }
  
  // Print results
  console.log('\n==========================================');
  console.log('📊 Test Results Summary');
  console.log('==========================================');
  
  for (const feature in results.features) {
    const f = results.features[feature];
    console.log(`\n${feature}:`);
    for (const test of f.tests) {
      const icon = test.passed ? '✅' : '❌';
      console.log(`  ${icon} ${test.name} (${test.status})`);
    }
  }
  
  console.log('\n==========================================');
  console.log(`✅ Passed: ${results.passed}`);
  console.log(`❌ Failed: ${results.failed}`);
  console.log(`📈 Success Rate: ${((results.passed / (results.passed + results.failed)) * 100).toFixed(1)}%`);
  
  if (results.errors.length > 0) {
    console.log('\n⚠️  Errors:');
    results.errors.forEach(err => console.log(`  - ${err}`));
  }
  
  console.log('\n✨ Test Complete!');
  process.exit(results.failed > 0 ? 1 : 0);
}

// Run tests
runAllTests().catch(error => {
  console.error('Fatal error:', error);
  process.exit(1);
});
