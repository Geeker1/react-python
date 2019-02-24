from django.contrib import admin
from django.contrib.contenttypes.admin import GenericTabularInline

# Register your models here.

from .models import Posts,PostCategory

class PostCategoryAdmin(admin.ModelAdmin):
    list_display = ['title', 'slug','urlimage']
    #list_editable = ['title', 'urlimage']
    prepopulated_fields = {'slug': ('title',)}
admin.site.register(PostCategory, PostCategoryAdmin)


class PostsAdmin(admin.ModelAdmin):
    list_display = ['name', 'heading','category','description']
    list_filter = ['name','heading']
    #list_editable = ['name', 'heading', 'description']

admin.site.register(Posts, PostsAdmin)

admin.site.site_header = "Djang-React Page"
admin.site.site_title = "Djang-React"
admin.site.index_title = "Welcome to React-Test Admin Page"