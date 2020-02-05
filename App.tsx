import React from 'react';
import {Component} from 'react';
import {Platform, StyleSheet, Button, View} from 'react-native';
import FusionCharts from 'react-native-fusioncharts';
import {any} from 'prop-types';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const schema = [
  {
    name: 'Observation Time',
    type: 'date',
    format: '%Y-%m-%d %H:%M:%S',
  },
  {
    name: 'Temperature (in °C)',
    type: 'number',
  },
  {
    name: 'City',
    type: 'string',
  },
];

const data = [
  ['2019-07-13 00:00:00', 23, 'Kuala Lumpur'],
  ['2019-07-13 00:00:00', 19, 'Panama City'],
  ['2019-07-13 00:00:01', 22, 'Kuala Lumpur'],
  ['2019-07-13 00:00:01', 43, 'Panama City'],
  ['2019-07-13 00:00:02', 18, 'Kuala Lumpur'],
  ['2019-07-13 00:00:02', 25, 'Panama City'],
  ['2019-07-13 00:00:03', 31, 'Kuala Lumpur'],
  ['2019-07-13 00:00:03', 23, 'Panama City'],
  ['2019-07-13 00:00:04', 41, 'Kuala Lumpur'],
  ['2019-07-13 00:00:04', 18, 'Panama City'],
  ['2019-07-13 00:00:05', 42, 'Kuala Lumpur'],
  ['2019-07-13 00:00:05', 40, 'Panama City'],
  ['2019-07-13 00:00:06', 31, 'Kuala Lumpur'],
  ['2019-07-13 00:00:06', 22, 'Panama City'],
  ['2019-07-13 00:00:07', 31, 'Kuala Lumpur'],
  ['2019-07-13 00:00:07', 18, 'Panama City'],
  ['2019-07-13 00:00:08', 15, 'Kuala Lumpur'],
  ['2019-07-13 00:00:08', 44, 'Panama City'],
  ['2019-07-13 00:00:09', 46, 'Kuala Lumpur'],
  ['2019-07-13 00:00:09', 41, 'Panama City'],
  ['2019-07-13 00:00:09', 18, 'Kuala Lumpur'],
  ['2019-07-13 00:00:09', 45, 'Panama City'],
  ['2019-07-13 00:00:10', 23, 'Kuala Lumpur'],
  ['2019-07-13 00:00:10', 41, 'Panama City'],
  ['2019-07-13 00:00:11', 13, 'Kuala Lumpur'],
  ['2019-07-13 00:00:11', 30, 'Panama City'],
  ['2019-07-13 00:00:12', 30, 'Kuala Lumpur'],
  ['2019-07-13 00:00:12', 15, 'Panama City'],
  ['2019-07-13 00:00:13', 19, 'Kuala Lumpur'],
  ['2019-07-13 00:00:13', 26, 'Panama City'],
  ['2019-07-13 00:00:14', 35, 'Kuala Lumpur'],
  ['2019-07-13 00:00:14', 28, 'Panama City'],
  ['2019-07-13 00:00:15', 22, 'Kuala Lumpur'],
  ['2019-07-13 00:00:15', 35, 'Panama City'],
  ['2019-07-13 00:00:16', 43, 'Kuala Lumpur'],
  ['2019-07-13 00:00:16', 44, 'Panama City'],
  ['2019-07-13 00:00:17', 41, 'Kuala Lumpur'],
  ['2019-07-13 00:00:17', 13, 'Panama City'],
  ['2019-07-13 00:00:18', 22, 'Kuala Lumpur'],
  ['2019-07-13 00:00:18', 18, 'Panama City'],
  ['2019-07-13 00:00:19', 39, 'Kuala Lumpur'],
  ['2019-07-13 00:00:19', 15, 'Panama City'],
  ['2019-07-13 00:00:20', 15, 'Kuala Lumpur'],
  ['2019-07-13 00:00:20', 39, 'Panama City'],
  ['2019-07-13 00:00:21', 20, 'Kuala Lumpur'],
  ['2019-07-13 00:00:21', 28, 'Panama City'],
  ['2019-07-13 00:00:22', 26, 'Kuala Lumpur'],
  ['2019-07-13 00:00:22', 28, 'Panama City'],
  ['2019-07-13 00:00:23', 31, 'Kuala Lumpur'],
  ['2019-07-13 00:00:23', 13, 'Panama City'],
  ['2019-07-13 00:00:24', 28, 'Kuala Lumpur'],
  ['2019-07-13 00:00:24', 30, 'Panama City'],
  ['2019-07-13 00:00:25', 44, 'Kuala Lumpur'],
  ['2019-07-13 00:00:25', 42, 'Panama City'],
  ['2019-07-13 00:00:26', 13, 'Kuala Lumpur'],
  ['2019-07-13 00:00:26', 13, 'Panama City'],
  ['2019-07-13 00:00:27', 37, 'Kuala Lumpur'],
  ['2019-07-13 00:00:27', 25, 'Panama City'],
  ['2019-07-13 00:00:28', 30, 'Kuala Lumpur'],
  ['2019-07-13 00:00:28', 18, 'Panama City'],
  ['2019-07-13 00:00:29', 28, 'Kuala Lumpur'],
  ['2019-07-13 00:00:29', 32, 'Panama City'],
  ['2019-07-13 00:00:30', 45, 'Kuala Lumpur'],
  ['2019-07-13 00:00:30', 35, 'Panama City'],
  ['2019-07-13 00:00:31', 36, 'Kuala Lumpur'],
  ['2019-07-13 00:00:31', 40, 'Panama City'],
  ['2019-07-13 00:00:32', 26, 'Kuala Lumpur'],
  ['2019-07-13 00:00:32', 18, 'Panama City'],
  ['2019-07-13 00:00:33', 24, 'Kuala Lumpur'],
  ['2019-07-13 00:00:33', 21, 'Panama City'],
  ['2019-07-13 00:00:34', 40, 'Kuala Lumpur'],
  ['2019-07-13 00:00:34', 35, 'Panama City'],
  ['2019-07-13 00:00:35', 46, 'Kuala Lumpur'],
  ['2019-07-13 00:00:35', 44, 'Panama City'],
  ['2019-07-13 00:00:36', 18, 'Kuala Lumpur'],
  ['2019-07-13 00:00:36', 15, 'Panama City'],
  ['2019-07-13 00:00:37', 28, 'Kuala Lumpur'],
  ['2019-07-13 00:00:37', 44, 'Panama City'],
  ['2019-07-13 00:00:38', 15, 'Kuala Lumpur'],
  ['2019-07-13 00:00:38', 28, 'Panama City'],
  ['2019-07-13 00:00:39', 36, 'Kuala Lumpur'],
  ['2019-07-13 00:00:39', 27, 'Panama City'],
  ['2019-07-13 00:00:40', 21, 'Kuala Lumpur'],
  ['2019-07-13 00:00:40', 37, 'Panama City'],
  ['2019-07-13 00:00:41', 43, 'Kuala Lumpur'],
  ['2019-07-13 00:00:41', 32, 'Panama City'],
  ['2019-07-13 00:00:42', 38, 'Kuala Lumpur'],
  ['2019-07-13 00:00:42', 29, 'Panama City'],
  ['2019-07-13 00:00:43', 27, 'Kuala Lumpur'],
  ['2019-07-13 00:00:43', 32, 'Panama City'],
  ['2019-07-13 00:00:44', 23, 'Kuala Lumpur'],
  ['2019-07-13 00:00:44', 30, 'Panama City'],
  ['2019-07-13 00:00:45', 14, 'Kuala Lumpur'],
  ['2019-07-13 00:00:45', 21, 'Panama City'],
  ['2019-07-13 00:00:46', 31, 'Kuala Lumpur'],
  ['2019-07-13 00:00:46', 13, 'Panama City'],
  ['2019-07-13 00:00:47', 41, 'Kuala Lumpur'],
  ['2019-07-13 00:00:47', 46, 'Panama City'],
  ['2019-07-13 00:00:48', 21, 'Kuala Lumpur'],
  ['2019-07-13 00:00:48', 32, 'Panama City'],
  ['2019-07-13 00:00:49', 21, 'Kuala Lumpur'],
  ['2019-07-13 00:00:49', 22, 'Panama City'],
  ['2019-07-13 00:00:50', 43, 'Kuala Lumpur'],
  ['2019-07-13 00:00:50', 13, 'Panama City'],
  ['2019-07-13 00:00:51', 45, 'Kuala Lumpur'],
  ['2019-07-13 00:00:51', 33, 'Panama City'],
  ['2019-07-13 00:00:52', 31, 'Kuala Lumpur'],
  ['2019-07-13 00:00:52', 45, 'Panama City'],
  ['2019-07-13 00:00:53', 34, 'Kuala Lumpur'],
  ['2019-07-13 00:00:53', 14, 'Panama City'],
  ['2019-07-13 00:00:54', 19, 'Kuala Lumpur'],
  ['2019-07-13 00:00:54', 14, 'Panama City'],
  ['2019-07-13 00:00:55', 24, 'Kuala Lumpur'],
  ['2019-07-13 00:00:55', 30, 'Panama City'],
  ['2019-07-13 00:00:56', 35, 'Kuala Lumpur'],
  ['2019-07-13 00:00:56', 36, 'Panama City'],
  ['2019-07-13 00:00:57', 36, 'Kuala Lumpur'],
  ['2019-07-13 00:00:57', 21, 'Panama City'],
  ['2019-07-13 00:00:58', 29, 'Kuala Lumpur'],
  ['2019-07-13 00:00:58', 40, 'Panama City'],
  ['2019-07-13 00:00:59', 34, 'Kuala Lumpur'],
  ['2019-07-13 00:00:59', 39, 'Panama City'],
  ['2019-07-13 00:01:00', 30, 'Kuala Lumpur'],
  ['2019-07-13 00:01:00', 46, 'Panama City'],
  ['2019-07-13 00:01:01', 43, 'Kuala Lumpur'],
  ['2019-07-13 00:01:01', 38, 'Panama City'],
  ['2019-07-13 00:01:02', 25, 'Kuala Lumpur'],
  ['2019-07-13 00:01:02', 13, 'Panama City'],
  ['2019-07-13 00:01:03', 21, 'Kuala Lumpur'],
  ['2019-07-13 00:01:03', 17, 'Panama City'],
  ['2019-07-13 00:01:04', 46, 'Kuala Lumpur'],
  ['2019-07-13 00:01:04', 45, 'Panama City'],
  ['2019-07-13 00:01:05', 13, 'Kuala Lumpur'],
  ['2019-07-13 00:01:05', 29, 'Panama City'],
  ['2019-07-13 00:01:06', 42, 'Kuala Lumpur'],
  ['2019-07-13 00:01:06', 31, 'Panama City'],
  ['2019-07-13 00:01:07', 33, 'Kuala Lumpur'],
  ['2019-07-13 00:01:07', 27, 'Panama City'],
  ['2019-07-13 00:01:08', 29, 'Kuala Lumpur'],
  ['2019-07-13 00:01:08', 27, 'Panama City'],
  ['2019-07-13 00:01:09', 16, 'Kuala Lumpur'],
  ['2019-07-13 00:01:09', 43, 'Panama City'],
  ['2019-07-13 00:01:09', 37, 'Kuala Lumpur'],
  ['2019-07-13 00:01:09', 30, 'Panama City'],
  ['2019-07-13 00:01:10', 40, 'Kuala Lumpur'],
  ['2019-07-13 00:01:10', 32, 'Panama City'],
  ['2019-07-13 00:01:11', 44, 'Kuala Lumpur'],
  ['2019-07-13 00:01:11', 23, 'Panama City'],
  ['2019-07-13 00:01:12', 18, 'Kuala Lumpur'],
  ['2019-07-13 00:01:12', 46, 'Panama City'],
  ['2019-07-13 00:01:13', 33, 'Kuala Lumpur'],
  ['2019-07-13 00:01:13', 39, 'Panama City'],
  ['2019-07-13 00:01:14', 38, 'Kuala Lumpur'],
  ['2019-07-13 00:01:14', 43, 'Panama City'],
  ['2019-07-13 00:01:15', 36, 'Kuala Lumpur'],
  ['2019-07-13 00:01:15', 33, 'Panama City'],
  ['2019-07-13 00:01:16', 17, 'Kuala Lumpur'],
  ['2019-07-13 00:01:16', 29, 'Panama City'],
  ['2019-07-13 00:01:17', 37, 'Kuala Lumpur'],
  ['2019-07-13 00:01:17', 25, 'Panama City'],
  ['2019-07-13 00:01:18', 35, 'Kuala Lumpur'],
  ['2019-07-13 00:01:18', 35, 'Panama City'],
  ['2019-07-13 00:01:19', 34, 'Kuala Lumpur'],
  ['2019-07-13 00:01:19', 14, 'Panama City'],
  ['2019-07-13 00:01:20', 32, 'Kuala Lumpur'],
  ['2019-07-13 00:01:20', 44, 'Panama City'],
  ['2019-07-13 00:01:21', 15, 'Kuala Lumpur'],
  ['2019-07-13 00:01:21', 34, 'Panama City'],
  ['2019-07-13 00:01:22', 28, 'Kuala Lumpur'],
  ['2019-07-13 00:01:22', 28, 'Panama City'],
  ['2019-07-13 00:01:23', 16, 'Kuala Lumpur'],
  ['2019-07-13 00:01:23', 36, 'Panama City'],
  ['2019-07-13 00:01:24', 13, 'Kuala Lumpur'],
  ['2019-07-13 00:01:24', 35, 'Panama City'],
  ['2019-07-13 00:01:25', 17, 'Kuala Lumpur'],
  ['2019-07-13 00:01:25', 27, 'Panama City'],
  ['2019-07-13 00:01:26', 18, 'Kuala Lumpur'],
  ['2019-07-13 00:01:26', 37, 'Panama City'],
  ['2019-07-13 00:01:27', 28, 'Kuala Lumpur'],
  ['2019-07-13 00:01:27', 30, 'Panama City'],
  ['2019-07-13 00:01:28', 42, 'Kuala Lumpur'],
  ['2019-07-13 00:01:28', 27, 'Panama City'],
  ['2019-07-13 00:01:29', 33, 'Kuala Lumpur'],
  ['2019-07-13 00:01:29', 36, 'Panama City'],
  ['2019-07-13 00:01:30', 19, 'Kuala Lumpur'],
  ['2019-07-13 00:01:30', 46, 'Panama City'],
  ['2019-07-13 00:01:31', 24, 'Kuala Lumpur'],
  ['2019-07-13 00:01:31', 27, 'Panama City'],
  ['2019-07-13 00:01:32', 41, 'Kuala Lumpur'],
  ['2019-07-13 00:01:32', 15, 'Panama City'],
  ['2019-07-13 00:01:33', 20, 'Kuala Lumpur'],
  ['2019-07-13 00:01:33', 43, 'Panama City'],
  ['2019-07-13 00:01:34', 39, 'Kuala Lumpur'],
  ['2019-07-13 00:01:34', 30, 'Panama City'],
  ['2019-07-13 00:01:35', 32, 'Kuala Lumpur'],
  ['2019-07-13 00:01:35', 20, 'Panama City'],
  ['2019-07-13 00:01:36', 37, 'Kuala Lumpur'],
  ['2019-07-13 00:01:36', 26, 'Panama City'],
  ['2019-07-13 00:01:37', 26, 'Kuala Lumpur'],
  ['2019-07-13 00:01:37', 30, 'Panama City'],
  ['2019-07-13 00:01:38', 43, 'Kuala Lumpur'],
  ['2019-07-13 00:01:38', 20, 'Panama City'],
  ['2019-07-13 00:01:39', 39, 'Kuala Lumpur'],
  ['2019-07-13 00:01:39', 20, 'Panama City'],
  ['2019-07-13 00:01:40', 28, 'Kuala Lumpur'],
  ['2019-07-13 00:01:40', 45, 'Panama City'],
  ['2019-07-13 00:01:41', 31, 'Kuala Lumpur'],
  ['2019-07-13 00:01:41', 43, 'Panama City'],
  ['2019-07-13 00:01:42', 34, 'Kuala Lumpur'],
  ['2019-07-13 00:01:42', 36, 'Panama City'],
  ['2019-07-13 00:01:43', 25, 'Kuala Lumpur'],
  ['2019-07-13 00:01:43', 14, 'Panama City'],
  ['2019-07-13 00:01:44', 35, 'Kuala Lumpur'],
  ['2019-07-13 00:01:44', 43, 'Panama City'],
  ['2019-07-13 00:01:45', 36, 'Kuala Lumpur'],
  ['2019-07-13 00:01:45', 34, 'Panama City'],
  ['2019-07-13 00:01:46', 19, 'Kuala Lumpur'],
  ['2019-07-13 00:01:46', 36, 'Panama City'],
  ['2019-07-13 00:01:47', 30, 'Kuala Lumpur'],
  ['2019-07-13 00:01:47', 35, 'Panama City'],
  ['2019-07-13 00:01:48', 30, 'Kuala Lumpur'],
  ['2019-07-13 00:01:48', 26, 'Panama City'],
  ['2019-07-13 00:01:49', 35, 'Kuala Lumpur'],
  ['2019-07-13 00:01:49', 16, 'Panama City'],
  ['2019-07-13 00:01:50', 43, 'Kuala Lumpur'],
  ['2019-07-13 00:01:50', 38, 'Panama City'],
  ['2019-07-13 00:01:51', 27, 'Kuala Lumpur'],
  ['2019-07-13 00:01:51', 17, 'Panama City'],
  ['2019-07-13 00:01:52', 24, 'Kuala Lumpur'],
  ['2019-07-13 00:01:52', 23, 'Panama City'],
  ['2019-07-13 00:01:53', 17, 'Kuala Lumpur'],
  ['2019-07-13 00:01:53', 38, 'Panama City'],
  ['2019-07-13 00:01:54', 18, 'Kuala Lumpur'],
  ['2019-07-13 00:01:54', 14, 'Panama City'],
  ['2019-07-13 00:01:55', 16, 'Kuala Lumpur'],
  ['2019-07-13 00:01:55', 16, 'Panama City'],
  ['2019-07-13 00:01:56', 36, 'Kuala Lumpur'],
  ['2019-07-13 00:01:56', 14, 'Panama City'],
  ['2019-07-13 00:01:57', 41, 'Kuala Lumpur'],
  ['2019-07-13 00:01:57', 15, 'Panama City'],
  ['2019-07-13 00:01:58', 40, 'Kuala Lumpur'],
  ['2019-07-13 00:01:58', 24, 'Panama City'],
  ['2019-07-13 00:01:59', 27, 'Kuala Lumpur'],
  ['2019-07-13 00:01:59', 17, 'Panama City'],
  ['2019-07-13 00:02:00', 38, 'Kuala Lumpur'],
  ['2019-07-13 00:02:00', 20, 'Panama City'],
  ['2019-07-13 00:02:01', 23, 'Kuala Lumpur'],
  ['2019-07-13 00:02:01', 37, 'Panama City'],
  ['2019-07-13 00:02:02', 37, 'Kuala Lumpur'],
  ['2019-07-13 00:02:02', 27, 'Panama City'],
  ['2019-07-13 00:02:03', 20, 'Kuala Lumpur'],
  ['2019-07-13 00:02:03', 45, 'Panama City'],
  ['2019-07-13 00:02:04', 33, 'Kuala Lumpur'],
  ['2019-07-13 00:02:04', 40, 'Panama City'],
  ['2019-07-13 00:02:05', 25, 'Kuala Lumpur'],
  ['2019-07-13 00:02:05', 46, 'Panama City'],
  ['2019-07-13 00:02:06', 27, 'Kuala Lumpur'],
  ['2019-07-13 00:02:06', 14, 'Panama City'],
  ['2019-07-13 00:02:07', 23, 'Kuala Lumpur'],
  ['2019-07-13 00:02:07', 18, 'Panama City'],
  ['2019-07-13 00:02:08', 16, 'Kuala Lumpur'],
  ['2019-07-13 00:02:08', 15, 'Panama City'],
  ['2019-07-13 00:02:09', 15, 'Kuala Lumpur'],
  ['2019-07-13 00:02:09', 46, 'Panama City'],
  ['2019-07-13 00:02:09', 24, 'Kuala Lumpur'],
  ['2019-07-13 00:02:09', 30, 'Panama City'],
  ['2019-07-13 00:02:10', 17, 'Kuala Lumpur'],
  ['2019-07-13 00:02:10', 35, 'Panama City'],
  ['2019-07-13 00:02:11', 44, 'Kuala Lumpur'],
  ['2019-07-13 00:02:11', 17, 'Panama City'],
  ['2019-07-13 00:02:12', 17, 'Kuala Lumpur'],
  ['2019-07-13 00:02:12', 30, 'Panama City'],
  ['2019-07-13 00:02:13', 37, 'Kuala Lumpur'],
  ['2019-07-13 00:02:13', 21, 'Panama City'],
  ['2019-07-13 00:02:14', 30, 'Kuala Lumpur'],
  ['2019-07-13 00:02:14', 28, 'Panama City'],
  ['2019-07-13 00:02:15', 43, 'Kuala Lumpur'],
  ['2019-07-13 00:02:15', 13, 'Panama City'],
  ['2019-07-13 00:02:16', 25, 'Kuala Lumpur'],
  ['2019-07-13 00:02:16', 17, 'Panama City'],
  ['2019-07-13 00:02:17', 46, 'Kuala Lumpur'],
  ['2019-07-13 00:02:17', 18, 'Panama City'],
  ['2019-07-13 00:02:18', 17, 'Kuala Lumpur'],
  ['2019-07-13 00:02:18', 36, 'Panama City'],
  ['2019-07-13 00:02:19', 15, 'Kuala Lumpur'],
  ['2019-07-13 00:02:19', 45, 'Panama City'],
  ['2019-07-13 00:02:20', 28, 'Kuala Lumpur'],
  ['2019-07-13 00:02:20', 21, 'Panama City'],
  ['2019-07-13 00:02:21', 30, 'Kuala Lumpur'],
  ['2019-07-13 00:02:21', 41, 'Panama City'],
  ['2019-07-13 00:02:22', 21, 'Kuala Lumpur'],
  ['2019-07-13 00:02:22', 20, 'Panama City'],
  ['2019-07-13 00:02:23', 19, 'Kuala Lumpur'],
  ['2019-07-13 00:02:23', 14, 'Panama City'],
  ['2019-07-13 00:02:24', 39, 'Kuala Lumpur'],
  ['2019-07-13 00:02:24', 21, 'Panama City'],
  ['2019-07-13 00:02:25', 14, 'Kuala Lumpur'],
  ['2019-07-13 00:02:25', 32, 'Panama City'],
  ['2019-07-13 00:02:26', 29, 'Kuala Lumpur'],
  ['2019-07-13 00:02:26', 46, 'Panama City'],
  ['2019-07-13 00:02:27', 22, 'Kuala Lumpur'],
  ['2019-07-13 00:02:27', 32, 'Panama City'],
  ['2019-07-13 00:02:28', 40, 'Kuala Lumpur'],
  ['2019-07-13 00:02:28', 27, 'Panama City'],
  ['2019-07-13 00:02:29', 17, 'Kuala Lumpur'],
  ['2019-07-13 00:02:29', 18, 'Panama City'],
  ['2019-07-13 00:02:30', 26, 'Kuala Lumpur'],
  ['2019-07-13 00:02:30', 14, 'Panama City'],
  ['2019-07-13 00:02:31', 41, 'Kuala Lumpur'],
  ['2019-07-13 00:02:31', 36, 'Panama City'],
  ['2019-07-13 00:02:32', 24, 'Kuala Lumpur'],
  ['2019-07-13 00:02:32', 21, 'Panama City'],
  ['2019-07-13 00:02:33', 16, 'Kuala Lumpur'],
  ['2019-07-13 00:02:33', 15, 'Panama City'],
  ['2019-07-13 00:02:34', 46, 'Kuala Lumpur'],
  ['2019-07-13 00:02:34', 24, 'Panama City'],
  ['2019-07-13 00:02:35', 21, 'Kuala Lumpur'],
  ['2019-07-13 00:02:35', 22, 'Panama City'],
  ['2019-07-13 00:02:36', 20, 'Kuala Lumpur'],
  ['2019-07-13 00:02:36', 15, 'Panama City'],
  ['2019-07-13 00:02:37', 29, 'Kuala Lumpur'],
  ['2019-07-13 00:02:37', 24, 'Panama City'],
  ['2019-07-13 00:02:38', 32, 'Kuala Lumpur'],
  ['2019-07-13 00:02:38', 43, 'Panama City'],
  ['2019-07-13 00:02:39', 37, 'Kuala Lumpur'],
  ['2019-07-13 00:02:39', 41, 'Panama City'],
  ['2019-07-13 00:02:40', 21, 'Kuala Lumpur'],
  ['2019-07-13 00:02:40', 24, 'Panama City'],
  ['2019-07-13 00:02:41', 38, 'Kuala Lumpur'],
  ['2019-07-13 00:02:41', 29, 'Panama City'],
  ['2019-07-13 00:02:42', 18, 'Kuala Lumpur'],
  ['2019-07-13 00:02:42', 27, 'Panama City'],
  ['2019-07-13 00:02:43', 41, 'Kuala Lumpur'],
  ['2019-07-13 00:02:43', 43, 'Panama City'],
  ['2019-07-13 00:02:44', 40, 'Kuala Lumpur'],
  ['2019-07-13 00:02:44', 27, 'Panama City'],
  ['2019-07-13 00:02:45', 37, 'Kuala Lumpur'],
  ['2019-07-13 00:02:45', 14, 'Panama City'],
  ['2019-07-13 00:02:46', 26, 'Kuala Lumpur'],
  ['2019-07-13 00:02:46', 21, 'Panama City'],
  ['2019-07-13 00:02:47', 36, 'Kuala Lumpur'],
  ['2019-07-13 00:02:47', 42, 'Panama City'],
  ['2019-07-13 00:02:48', 20, 'Kuala Lumpur'],
  ['2019-07-13 00:02:48', 24, 'Panama City'],
  ['2019-07-13 00:02:49', 46, 'Kuala Lumpur'],
  ['2019-07-13 00:02:49', 37, 'Panama City'],
  ['2019-07-13 00:02:50', 29, 'Kuala Lumpur'],
  ['2019-07-13 00:02:50', 26, 'Panama City'],
  ['2019-07-13 00:02:51', 18, 'Kuala Lumpur'],
  ['2019-07-13 00:02:51', 27, 'Panama City'],
  ['2019-07-13 00:02:52', 42, 'Kuala Lumpur'],
  ['2019-07-13 00:02:52', 40, 'Panama City'],
  ['2019-07-13 00:02:53', 14, 'Kuala Lumpur'],
  ['2019-07-13 00:02:53', 37, 'Panama City'],
  ['2019-07-13 00:02:54', 31, 'Kuala Lumpur'],
  ['2019-07-13 00:02:54', 35, 'Panama City'],
  ['2019-07-13 00:02:55', 32, 'Kuala Lumpur'],
  ['2019-07-13 00:02:55', 19, 'Panama City'],
  ['2019-07-13 00:02:56', 41, 'Kuala Lumpur'],
  ['2019-07-13 00:02:56', 27, 'Panama City'],
  ['2019-07-13 00:02:57', 23, 'Kuala Lumpur'],
  ['2019-07-13 00:02:57', 17, 'Panama City'],
  ['2019-07-13 00:02:58', 34, 'Kuala Lumpur'],
  ['2019-07-13 00:02:58', 28, 'Panama City'],
  ['2019-07-13 00:02:59', 13, 'Kuala Lumpur'],
  ['2019-07-13 00:02:59', 14, 'Panama City'],
];

const getNextRandomDate = function getNextRandomDate(d: any) {
  return new Date(new Date(d).getTime() + 1000);
};

const fd = function fd(d: any) {
  let e = new Date(d.getTime() - d.getTimezoneOffset() * 60000).toISOString();
  let f = e.split('.')[0];
  let g = f.split('T');
  let h = g.join(' ');
  return h;
};

const randBetween = function randBetween(min: any, max: any) {
  var ceilMin = Math.ceil(min);
  return Math.floor(Math.random() * (Math.floor(max) - ceilMin + 1)) + ceilMin;
};

let lastTimeStr: any = data[data.length - 1][0];

type Props = {};
type State = {
  type: string;
  width: string;
  height: string;
  dataFormat: any;
  dataSource: any;
  schemaJson: any;
  dataJson: any;
};
export default class App extends Component<Props, State> {
  libraryPath: any;
  state: State;
  apiCaller: any;
  dataUpdater: any;
  constructor(props: Props) {
    super(props);

    this.state = {
      type: 'timeseries',
      width: '100%',
      height: '80%',
      dataFormat: 'json',
      dataSource: {
        data: null,
        yAxis: { plottype: 'area' },
        series: 'City'
      },
      schemaJson: schema,
      dataJson: data,
    };

    this.libraryPath = Platform.select({
      // Specify fusioncharts.html file location
      ios: require('./assets/fusioncharts.html'),
      android: {uri: 'file:///android_asset/fusioncharts.html'},
    });

    this.apiCaller = null;
    this.dataUpdater = null;

    this.bindApiCaller = this.bindApiCaller.bind(this);
    this.changeType = this.changeType.bind(this);
  }

  changeType() {
    lastTimeStr = getNextRandomDate(lastTimeStr);
    let newDate = new Date(lastTimeStr);
    let formattedNewDate = fd(newDate);

    this.dataUpdater =  setInterval(() => {
      newDate = getNextRandomDate(formattedNewDate);
      formattedNewDate = fd(newDate);
      this.apiCaller(`window.chartObj.feedData([
        ['${formattedNewDate}', ${randBetween(13, 45)}, 'Kuala Lumpur'],
        ['${formattedNewDate}', ${randBetween(13, 45)}, 'Panama City']
      ]);`);
    }, 1000);
  }

  // Bind the argument from onInitialized with the property you created in your constructor
  bindApiCaller(caller: any) {
    // Now this.apiCaller will be a function where you can pass js code for the WebView
    // to access the chart Object. See the method changeType.
    this.apiCaller = caller;
    this.changeType();
  }

  componentWillUnmount() {
    clearInterval(this.dataUpdater);
  }

  render() {
    return (
      <View style={styles.container}>
        <FusionCharts
          dataJson={this.state.dataJson}
          schemaJson={this.state.schemaJson}
          type={this.state.type}
          width={this.state.width}
          height={this.state.height}
          dataFormat={this.state.dataFormat}
          dataSource={this.state.dataSource}
          libraryPath={this.libraryPath} // set the libraryPath property
          onInitialized={(caller: any) => {
            this.bindApiCaller(caller);
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
