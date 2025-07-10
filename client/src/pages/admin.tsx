import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Edit, Save, Plus, Trash2, Upload } from "lucide-react";
import { apiRequest } from "@/lib/queryClient";

export default function AdminPage() {
  const queryClient = useQueryClient();
  const [activeTimelineEdit, setActiveTimelineEdit] = useState<number | null>(null);

  // Timeline data
  const { data: timelineItems = [], isLoading: timelineLoading } = useQuery({
    queryKey: ["/api/timeline"],
  });

  // Projects data
  const { data: projects = [], isLoading: projectsLoading } = useQuery({
    queryKey: ["/api/projects"],
  });

  // Live feed data
  const { data: liveFeedItems = [], isLoading: liveFeedLoading } = useQuery({
    queryKey: ["/api/livefeed"],
  });

  // Mutations
  const updateTimelineItem = useMutation({
    mutationFn: ({ id, ...data }: any) =>
      apiRequest(`/api/timeline/${id}`, { method: "PUT", body: JSON.stringify(data) }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/timeline"] });
      setActiveTimelineEdit(null);
    },
  });

  const addTimelineItem = useMutation({
    mutationFn: (data: any) =>
      apiRequest("/api/timeline", { method: "POST", body: JSON.stringify(data) }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/timeline"] });
    },
  });

  const updateProject = useMutation({
    mutationFn: ({ id, ...data }: any) =>
      apiRequest(`/api/projects/${id}`, { method: "PUT", body: JSON.stringify(data) }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/projects"] });
    },
  });

  const handleTimelineUpdate = (id: number, field: string, value: any) => {
    const item = timelineItems.find((item: any) => item.id === id);
    if (item) {
      updateTimelineItem.mutate({ id, ...item, [field]: value });
    }
  };

  if (timelineLoading || projectsLoading || liveFeedLoading) {
    return (
      <div className="min-h-screen bg-site-primary flex items-center justify-center">
        <div className="text-white">Loading admin panel...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-site-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-site-gold mb-2">Portfolio Admin</h1>
          <p className="text-site-silver">Manage your portfolio content from behind the scenes</p>
        </div>

        <Tabs defaultValue="timeline" className="space-y-6">
          <TabsList className="bg-site-secondary border-site-gold/20">
            <TabsTrigger value="timeline" className="data-[state=active]:bg-site-gold data-[state=active]:text-site-primary">
              Timeline
            </TabsTrigger>
            <TabsTrigger value="projects" className="data-[state=active]:bg-site-gold data-[state=active]:text-site-primary">
              Projects
            </TabsTrigger>
            <TabsTrigger value="content" className="data-[state=active]:bg-site-gold data-[state=active]:text-site-primary">
              Content
            </TabsTrigger>
            <TabsTrigger value="livefeed" className="data-[state=active]:bg-site-gold data-[state=active]:text-site-primary">
              Live Feed
            </TabsTrigger>
          </TabsList>

          <TabsContent value="timeline" className="space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-site-gold">Timeline Management</h2>
              <Button className="bg-site-gold text-site-primary hover:bg-site-gold/90">
                <Plus className="w-4 h-4 mr-2" />
                Add Milestone
              </Button>
            </div>

            <div className="grid gap-4">
              {timelineItems.map((item: any) => (
                <Card key={item.id} className="bg-site-secondary border-site-gold/20">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-site-gold">Age {item.age}</CardTitle>
                        <p className="text-site-silver">{item.title}</p>
                      </div>
                      <div className="flex gap-2">
                        {item.isActive && <Badge className="bg-green-500">ACTIVE</Badge>}
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => setActiveTimelineEdit(item.id)}
                          className="border-site-gold/30 text-site-gold hover:bg-site-gold/10"
                        >
                          <Edit className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    {activeTimelineEdit === item.id ? (
                      <div className="space-y-4">
                        <Input
                          value={item.title}
                          onChange={(e) => handleTimelineUpdate(item.id, "title", e.target.value)}
                          placeholder="Title"
                          className="bg-site-primary border-site-gold/30"
                        />
                        <Textarea
                          value={item.description}
                          onChange={(e) => handleTimelineUpdate(item.id, "description", e.target.value)}
                          placeholder="Description"
                          className="bg-site-primary border-site-gold/30"
                        />
                        <div className="flex gap-2">
                          <Input
                            value={item.age}
                            onChange={(e) => handleTimelineUpdate(item.id, "age", e.target.value)}
                            placeholder="Age"
                            className="bg-site-primary border-site-gold/30 w-20"
                          />
                          <Input
                            value={item.imageUrl || ""}
                            onChange={(e) => handleTimelineUpdate(item.id, "imageUrl", e.target.value)}
                            placeholder="Image URL"
                            className="bg-site-primary border-site-gold/30"
                          />
                        </div>
                        <Button
                          onClick={() => setActiveTimelineEdit(null)}
                          className="bg-site-gold text-site-primary hover:bg-site-gold/90"
                        >
                          <Save className="w-4 h-4 mr-2" />
                          Save Changes
                        </Button>
                      </div>
                    ) : (
                      <div>
                        <p className="text-white mb-4">{item.description}</p>
                        {item.imageUrl && (
                          <div className="flex items-center gap-2 text-site-silver text-sm">
                            <Upload className="w-4 h-4" />
                            Image: {item.imageUrl.slice(0, 50)}...
                          </div>
                        )}
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="projects" className="space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-site-gold">Project Management</h2>
              <Button className="bg-site-gold text-site-primary hover:bg-site-gold/90">
                <Plus className="w-4 h-4 mr-2" />
                Add Project
              </Button>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {projects.map((project: any) => (
                <Card key={project.id} className="bg-site-secondary border-site-gold/20">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-site-gold">{project.title}</CardTitle>
                        <p className="text-site-silver">{project.subtitle}</p>
                      </div>
                      <Badge className={`${
                        project.statusColor === "green" ? "bg-green-500" :
                        project.statusColor === "yellow" ? "bg-yellow-500" :
                        "bg-blue-500"
                      }`}>
                        {project.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-white mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags?.map((tag: string) => (
                        <Badge key={tag} variant="outline" className="border-site-gold/30 text-site-gold">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <Button
                      size="sm"
                      variant="outline"
                      className="mt-4 border-site-gold/30 text-site-gold hover:bg-site-gold/10"
                    >
                      <Edit className="w-4 h-4 mr-2" />
                      Edit Project
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="content" className="space-y-4">
            <h2 className="text-2xl font-bold text-site-gold">Content Sections</h2>
            <div className="grid gap-4">
              <Card className="bg-site-secondary border-site-gold/20">
                <CardHeader>
                  <CardTitle className="text-site-gold">Hero Section</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-site-silver mb-4">Update hero section content, tagline, and profile image</p>
                  <Button className="bg-site-gold text-site-primary hover:bg-site-gold/90">
                    <Edit className="w-4 h-4 mr-2" />
                    Edit Hero Content
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-site-secondary border-site-gold/20">
                <CardHeader>
                  <CardTitle className="text-site-gold">About Section</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-site-silver mb-4">Manage about section tabs and content</p>
                  <Button className="bg-site-gold text-site-primary hover:bg-site-gold/90">
                    <Edit className="w-4 h-4 mr-2" />
                    Edit About Content
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="livefeed" className="space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-site-gold">Live Feed Management</h2>
              <Button className="bg-site-gold text-site-primary hover:bg-site-gold/90">
                <Plus className="w-4 h-4 mr-2" />
                Add Update
              </Button>
            </div>

            <div className="grid gap-4">
              {liveFeedItems.map((item: any) => (
                <Card key={item.id} className="bg-site-secondary border-site-gold/20">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-site-gold">{item.title}</CardTitle>
                        <p className="text-site-silver text-sm">{item.type} • {item.timeAgo}</p>
                      </div>
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-site-gold/30 text-site-gold hover:bg-site-gold/10"
                      >
                        <Edit className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-white">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}