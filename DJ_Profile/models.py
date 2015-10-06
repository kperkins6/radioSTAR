from __future__ import unicode_literals

from django.db import models


class DJ_Profile(models.Model):
	
	# DJ information (editable by DJ).
	name = models.CharField(max_length=64)
	email = models.EmailField(max_length=254)
	hashed_password = models.CharField(max_length=64);
	station = models.CharField(max_length=128)

	# DJ information (found from listeners)
	overall_rating = models.IntegerField()
	### Tags can be used to shortly describe the DJ.
	### 	Each tag will be separated by a : and can
	###	can be used to find similar artists.
	tags = models.CharField(max_length=512)
	next_show = models.DateField()
