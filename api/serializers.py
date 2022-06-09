from pyexpat import model
from attr import fields
from rest_framework.serializers import ModelSerializer
from .models import Note

class NoteSerializers(ModelSerializer):
    class Meta:
        model = Note
        fields = '__all__'