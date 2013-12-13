'use strict';

angular.module('calculateDistance', [])
		.service('calculateDistance', function () {

			this.radius = 3961;
			this.pointA = {};
			this.pointB = {};

			this.setPointA = function (latLng) {
				this.pointA = latLng;
			};

			this.setPointB = function (latLng) {
				this.pointB = latLng;
			}

			this.calculate = function () {

				var lat1, lon1, lat2, lon2, dlat, dlon, a, c, dm, dk, mi, km;

				// get values for lat1, lon1, lat2, and lon2
				// convert coordinates to radians
				lat1 = this.deg2rad(this.pointA.lat);
				lon1 = this.deg2rad(this.pointA.lng);
				lat2 = this.deg2rad(this.pointB.lat);
				lon2 = this.deg2rad(this.pointB.lng);

				// find the differences between the coordinates
				dlat = lat2 - lat1;
				dlon = lon2 - lon1;

				// here's the heavy lifting
				a = Math.pow(Math.sin(dlat / 2), 2) + Math.cos(lat1) * Math.cos(lat2) * Math.pow(Math.sin(dlon / 2), 2);
				c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)); // great circle distance in radians
				dm = c * this.radius; // great circle distance in miles

				return this.round(dm);
			}

			this.deg2rad = function (deg) {
				return deg * Math.PI / 180; // radians = degrees * pi/180
			}

			this.round = function (number) {
				return Math.round(number * 1000) / 1000;
			}

		});